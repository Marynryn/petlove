import { createSelector } from "@reduxjs/toolkit";

export const selectGetFilter = (state) => state.pets.filter;
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
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectGetNews = (state) => state.pets.news;
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
