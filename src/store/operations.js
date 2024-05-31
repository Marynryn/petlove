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
      console.log(user);
      const res = await api.post("users/signin", user);

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
export const getNews = createAsyncThunk(
  "news/getNews",
  async ({ filter, page, perPage }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `/news?keyword=${filter}&page=${page}&limit=${perPage}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/friends");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getNotices = createAsyncThunk(
  "notices/getNotices",
  async ({ page, perPage, filter }, thunkAPI) => {
    try {
      const url = constructUrl(page, perPage, filter);
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const constructUrl = (page, perPage, filter) => {
  const baseUrl = `/notices?byDate=true&page=${page}&limit=${perPage}`;

  const hasFilters = Object.values(filter).some(
    (value) => value !== "" && value !== null
  );

  if (!hasFilters) {
    return baseUrl;
  }

  const query = new URLSearchParams();

  if (filter.inputFilter) query.append("keyword", filter.inputFilter);
  if (filter.category) query.append("category", filter.category);
  if (filter.species) query.append("species", filter.species);
  if (filter.location) query.append("locationId", filter.location);
  if (filter.price) query.append("byPrice", filter.price);
  if (filter.popular) query.append("byPopularity", filter.popular);
  query.append("byDate", "true");
  query.append("page", page);
  query.append("limit", perPage);

  return `/notices?${query.toString()}`;
};

export const getCategories = createAsyncThunk(
  "notices/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/notices/categories");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSex = createAsyncThunk(
  "notices/getSex",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/notices/sex");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSpecies = createAsyncThunk(
  "notices/getSpecies",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/notices/species");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getLocations = createAsyncThunk(
  "cities/getLocation",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/cities/");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
