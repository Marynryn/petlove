import { createSlice } from "@reduxjs/toolkit";
import { getFriends, getNews, getNotices } from "./operations";

const mySlice = createSlice({
  name: "pets",
  initialState: {
    news: {
      items: [],
      totalPages: 0,
      isLoading: false,
      error: null,
      filter: null,
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
      filter: null,
    },
  },

  reducers: {
    setFilter: (state, action) => {
      state.news.filter = action.payload;
    },
    deleteFilter: (state) => {
      state.news.filter = "";
    },
    //     addFilter: (state, action) => {
    //       state.participantsFilter = action.payload;
    //     },
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
      });
    //       .addCase(eventRegistration.pending, (state, action) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(eventRegistration.fulfilled, (state, action) => {

    //         state.isLoading = false;
    //         state.error = null;
    //       })
    //       .addCase(eventRegistration.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //       })
    //       .addCase(fetchParticipants.pending, (state, action) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(fetchParticipants.fulfilled, (state, action) => {

    //         state.isLoading = false;
    //         state.error = null;
    //         state.participants = action.payload;
    //       })
    //       .addCase(fetchParticipants.rejected, (state, action) => {

    //         state.isLoading = false;
    //         state.error = action.payload;
    //       });
  },
});

export const petsReducer = mySlice.reducer;
export const { setFilter, deleteFilter } = mySlice.actions;
