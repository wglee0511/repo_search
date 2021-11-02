import { createSlice } from "@reduxjs/toolkit";
import { repoAxios } from "../../shared/api";
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
    actionSetIssue: (state, action) => {
      const repo_id = action.payload.repo_id;
      const checkIndex = state.localRepo.findIndex(
        (each) => each.repo_id === repo_id
      );
      testLogger(checkIndex);
      state.localRepo =
        checkIndex === -1
          ? [...state.localRepo, action.payload]
          : [...state.localRepo];
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
export const { actionGetRepo, actionSetIssue } = repo.actions;

export default repo;
