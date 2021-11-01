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
      next: 1,
      total: 0,
    },
  },
  reducers: {
    actionGetRepo: (state, action) => {},
  },
});

export const getRepoFromGithub =
  (word) =>
  async (dispatch, getState, { history }) => {
    try {
      const { next, total } = getState().repo.paging;
      if (next > total && next !== 1) {
        return;
      }
      dispatch(actionIsLoading());

      const getData = await repoAxios.search(word, next);
      const data = getData.data;
      const totalItem = data.items;
      const totalPage = data.total_count;
      const totalSetup = totalItem.map((each) => {
        return {
          repository: each.full_name,
          description: each.description,
        };
      });

      console.log(data);

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
export const { actionGetRepo } = repo.actions;

export default repo;
