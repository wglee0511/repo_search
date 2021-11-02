import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
  },
});

export const repoAxios = {
  search: (word, page) =>
    api.get(
      `/search/repositories?q=${word}&sort=stars&per_page=20&order=desc&page=${page}`
    ),
  // 쿼리안 repo: 아이디/레포명 + 형식으로 삽입
  searchIssue: (word, page) =>
    api.get(
      `/search/issues?q=${word}&sort=created&per_page=20&order=asc&page=${page}`
    ),
};
