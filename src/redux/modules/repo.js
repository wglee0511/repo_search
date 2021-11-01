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
      dispatch(actionIsLoading());
    } catch (error) {
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
