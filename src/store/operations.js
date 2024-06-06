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

      setAuthHeader(res.data.token);
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

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/signout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("users/signout");

    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);

      const res = await api.get("users/current");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUserFull = createAsyncThunk(
  "auth/currentUserFull",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);

      const res = await api.get("users/current/full");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUserEdit = createAsyncThunk(
  "auth/currentUserEdit",
  async (filteredData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    console.log(filteredData);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);

      const res = await api.patch("users/current/edit", filteredData);
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

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const constructUrl = (page, perPage, filter) => {
  console.log(filter);
  const baseUrl = `/notices?byDate=true&page=${page}&limit=${perPage}`;

  const hasFilters = Object.values(filter).some(
    (value) => value !== "" && value !== null && value !== undefined
  );

  if (!hasFilters) {
    return baseUrl;
  }

  const query = new URLSearchParams();
  console.log("Query Initial:", query.toString());

  if (filter.inputFilter) query.append("keyword", filter.inputFilter);

  if (filter.category) query.append("category", filter.category);

  if (filter.species) query.append("species", filter.species);

  if (filter.location) query.append("locationId", filter.location);

  if (filter.price === "cheap") query.append("byPrice", true);

  if (filter.price === "expensive") query.append("byPrice", false);

  if (filter.popular === "unpopular") query.append("byPopularity", true);

  if (filter.popular === "popular") query.append("byPopularity", false);

  query.append("byDate", "true");
  query.append("page", page);
  query.append("limit", perPage);

  console.log("Query Final:", query.toString());
  return `/notices?${query.toString()}`;
};

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
export const getNoticesById = createAsyncThunk(
  "notices/getNoticesById",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/notices/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const addToFavorite = createAsyncThunk(
  "notices/addToFavorite",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.post(`/notices/favorites/add/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeFromFavorite = createAsyncThunk(
  "notices/removeFromFavorite",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/notices/favorites/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addMyPet = createAsyncThunk(
  "current/adMyPet",
  async (PetData, thunkAPI) => {
    try {
      const { data } = await api.post("/users/current/pets/add", PetData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeMyPet = createAsyncThunk(
  "current/removeMyPet",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/users/current/pets/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
