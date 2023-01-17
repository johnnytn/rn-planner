import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export type FetchResponse<T> = AxiosResponse<T, unknown>;
