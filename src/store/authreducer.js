import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  addToFavorite,
  currentUserEdit,
  currentUserFull,
  getNoticesById,
  logOut,
  login,
  refreshUser,
  removeFromFavorite,
  userPost,
} from "./operations.js";
import { toast } from "react-hot-toast";
const initialState = {
  user: {
    name: null,
    email: null,
    token: null,
    isLoggedIn: false,

    avatar: null,
    noticesFavorites: [],
    pets: [],
    noticesViewed: [],
  },
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isRefreshing: false,
  petById: null,
  noticesFavorites: [],
};

const myAuth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userPost.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;

        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState;
        state.user.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(getNoticesById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNoticesById.fulfilled, (state, action) => {
        state.petById = action.payload;

        state.isLoading = false;
      })
      .addCase(getNoticesById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(addToFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.noticesFavorites = action.payload;

        state.isLoading = false;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(removeFromFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.noticesFavorites = state.noticesFavorites.filter(
          (el) => el !== action.payload
        );

        state.user.noticesFavorites = state.user.noticesFavorites.filter(
          (el) => el._id !== action.payload
        );

        state.isLoading = false;
      })
      .addCase(removeFromFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(currentUserFull.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(currentUserFull.fulfilled, (state, action) => {
        state.user = action.payload;

        console.log(action.payload);
        state.isLoggedIn = true;
      })
      .addCase(currentUserFull.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(currentUserEdit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(currentUserEdit.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          ...action.payload,
        };

        console.log(state.user);
        state.isLoggedIn = true;
      })
      .addCase(currentUserEdit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      });
  },
});

const persistConfig = {
  key: "auth",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, myAuth.reducer);
