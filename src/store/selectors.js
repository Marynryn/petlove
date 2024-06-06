// import { createSelector } from "@reduxjs/toolkit";

export const selectGetFilter = (state) => state.pets.news.filter;
export const selectIsLoading = (state) => state.pets.isLoading;
export const selectError = (state) => state.pets.error;
// export const selectVisibleContacts = createSelector(
//   [selectGetContacts, selectGetFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const selectNoticeFavoriteFullInfo = (state) =>
  state.auth.user.noticesFavorites;
export const selectNoticeFavorite = (state) => state.auth.noticesFavorites;
export const selectNoticeById = (state) => state.auth.petById;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectPets = (state) => state.auth.user.pets;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectTotalPages = (state) => state.pets.news.totalPages;
export const selectGetNews = (state) => state.pets.news.items;
export const selectGetFriends = (state) => state.pets.friends.items;
export const selectGetNotices = (state) => state.pets.notices.items;
export const selectGetNoticesFilter = (state) => state.pets.notices.filter;
export const selectGetCategories = (state) =>
  state.pets.notices.selectData.category;
export const selectGetSex = (state) => state.pets.notices.selectData.sex;
export const selectGetSpecies = (state) =>
  state.pets.notices.selectData.species;
export const selectGetLocations = (state) =>
  state.pets.notices.selectData.location;
export const selectTotalPagesNotices = (state) => state.pets.notices.totalPages;
// export const selectGetFilter = (state) => state.events.filter;
// export const selectGetParticipants = (state) => state.events.participants;
// export const selectIsLoading = (state) => state.events.isLoading;
// export const selectError = (state) => state.events.error;
// export const selectGetParticipantsFilter = (state) =>
//   state.events.participantsFilter;
// export const selectVisibleEvents = createSelector(
//   selectGetEvents,
//   selectGetFilter,
//   (events, filter) => {
//     switch (filter) {
//       case "AtoZ":
//         return events.slice().sort((a, b) => a.title.localeCompare(b.title));
//       case "ZtoA":
//         return events.slice().sort((a, b) => b.title.localeCompare(a.title));
//       case "organizer":
//         return events
//           .slice()
//           .sort((a, b) => a.organizer.localeCompare(b.organizer));
//       case "eventDate":
//         return events
//           .slice()
//           .sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
//       case "showAll":
//       default:
//         return events;
//     }
//   }
// );
// export const selectVisibleParticipants = createSelector(
//   [selectGetParticipants, selectGetParticipantsFilter],
//   (participants, filter) => {
//     if (!participants.length) {
//       return [];
//     }
//     return participants.filter(
//       (participants) =>
//         participants.name.toLowerCase().includes(filter.toLowerCase()) ||
//         participants.email.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
