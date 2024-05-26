import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./operations";

const mySlice = createSlice({
  name: "pets",
  initialState: {
    news: [],
    isLoading: false,
    error: null,
    filter: null,
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteFilter: (state) => {
      state.filter = "";
    },
    //     addFilter: (state, action) => {
    //       state.participantsFilter = action.payload;
    //     },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.news = action.payload.results;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
