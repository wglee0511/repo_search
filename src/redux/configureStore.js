import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { connectRouter } from "connected-react-router";
import repo from "./modules/repo";
import isLoading from "./modules/isLoading";

export const history = createBrowserHistory();

const middlewares = [
  thunk.withExtraArgument({
    history,
  }),
];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  repo: repo.reducer,
  isLoading: isLoading.reducer,
  router: connectRouter(history),
});

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
