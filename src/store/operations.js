import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://petlove.b.goit.study/api/",
});
const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};
export const userPost = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("users/signup", credentials);
      // console.log(res.data);
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "users/signin",
  async (user, thunkAPI) => {
    try {
      const res = await api.post("users/signin", user);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("users/logout");

    clearAuthHeader();
    return data;
  } catch (error) {
    console.log("gfhffjf");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);

      const res = await api.get("users/current");
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
