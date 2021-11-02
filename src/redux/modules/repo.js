import { createSlice } from "@reduxjs/toolkit";
import { repoAxios } from "../../shared/api";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "../../shared/enterLocalStorage";
import testLogger from "../../shared/testLogger";
import { actionIsLoading } from "./isLoading";

const repo = createSlice({
  name: "repo",
  initialState: {
    totalRepo: [],
    localRepo: [],
    paging: {
      total: 0,
    },
  },
  reducers: {
    actionGetRepo: (state, action) => {
      const { totalPage, totalSetup } = action.payload;
      state.paging.total = totalPage;
      state.totalRepo = totalSetup;
    },
    actionSetRepo: (state, action) => {
      const repo_id = action.payload.repo_id;
      const checkIndex = state.localRepo.findIndex(
        (each) => each.repo_id === repo_id
      );
      if (checkIndex === -1) {
        state.localRepo = [...state.localRepo, action.payload];
        setLocalStorage("stored_repo", action.payload);
      }
    },
    actionResetUpRepo: (state) => {
      const getArr = getLocalStorage("stored_repo");
      state.localRepo = [...getArr];
    },
    actionDeleteRepo: (state, action) => {
      const repo_id = action.payload.repo_id;
      const deleteIndex = state.localRepo.findIndex(
        (each) => each.repo_id === repo_id
      );
      console.log(deleteIndex);
      if (deleteIndex !== -1) {
        state.localRepo.splice(deleteIndex, 1);
        deleteLocalStorage("stored_repo", action.payload);
      }
    },
  },
});

export const getRepoFromGithub =
  (word, page) =>
  async (dispatch, getState, { history }) => {
    try {
      const { total } = getState().repo.paging;

      dispatch(actionIsLoading());

      const getData = await repoAxios.search(word, page);
      const data = getData.data;

      const totalItem = data.items;
      testLogger(totalItem);
      const totalPage = data.total_count;
      const totalSetup = totalItem.map((each) => {
        return {
          repository: each.full_name,
          description: each.description,
          language: each.language,
          html_url: each.html_url,
        };
      });

      dispatch(actionGetRepo({ totalPage, totalSetup }));
      dispatch(actionIsLoading());
    } catch (error) {
      dispatch(actionIsLoading());
      testLogger(error);
    }
  };

export const getIssuesFromGithub =
  (word) =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(actionIsLoading());
    } catch (error) {
      testLogger(error);
    }
  };

export const {
  actionGetRepo,
  actionSetRepo,
  actionResetUpRepo,
  actionDeleteRepo,
} = repo.actions;

export default repo;
