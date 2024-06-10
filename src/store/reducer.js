import { createSlice } from "@reduxjs/toolkit";

import {
  getCategories,
  getFriends,
  getLocations,
  getNews,
  getNotices,
  getSex,
  getSpecies,
} from "./operations";

const initialState = {
  news: {
    items: [],
    totalPages: 0,
    isLoading: false,
    error: null,
    filter: "",
  },
  friends: {
    items: [],
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  notices: {
    items: [],
    totalPages: 0,
    isLoading: false,
    error: null,
    selectData: {
      category: ["show all"],
      sex: ["show all"],
      species: ["show all"],
      location: [],
    },
    filter: {
      inputFilter: null,
      category: null,
      gender: null,
      species: null,
      location: null,
      popular: null,
      price: null,
    },
  },
};
const mySlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.news.filter = action.payload;
    },
    setInputFilter: (state, action) => {
      state.notices.filter.inputFilter = action.payload;
    },
    setCategoryFilter: (state, action) => {
      console.log(action.payload);
      state.notices.filter.category = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.notices.filter.gender = action.payload;
    },
    setPetTypeFilter: (state, action) => {
      state.notices.filter.species = action.payload;
    },
    setLocationFilter: (state, action) => {
      state.notices.filter.location = action.payload;
    },
    resetFilters: (state) => {
      state.notices.filter = initialState.notices.filter;
    },
    setPopularFilter: (state, action) => {
      state.notices.filter.popular = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.notices.filter.price = action.payload;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.news.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news.isLoading = false;
        state.news.error = null;
        state.news.totalPages = action.payload.totalPages;
        state.news.items = action.payload.results;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.news.isLoading = false;
        state.news.error = action.payload;
      })
      .addCase(getFriends.pending, (state, action) => {
        state.friends.isLoading = true;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends.isLoading = false;
        state.friends.error = null;

        state.friends.items = action.payload;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.friends.isLoading = false;
        state.friends.error = action.payload;
      })
      .addCase(getNotices.pending, (state, action) => {
        state.notices.isLoading = true;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = null;
        state.notices.totalPages = action.payload.totalPages;
        state.notices.items = action.payload.results;
      })
      .addCase(getNotices.rejected, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = null;

        state.notices.selectData.category = action.payload;
      })
      .addCase(getSex.fulfilled, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = null;

        state.notices.selectData.sex = action.payload;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = null;

        state.notices.selectData.species = action.payload;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.notices.isLoading = false;
        state.notices.error = null;

        state.notices.selectData.location = action.payload;
      });
  },
});

export const petsReducer = mySlice.reducer;
export const {
  setFilter,
  setInputFilter,
  setCategoryFilter,
  setGenderFilter,
  setPetTypeFilter,
  setLocationFilter,
  resetFilters,
  setPriceFilter,
  setPopularFilter,
} = mySlice.actions;
