

export const selectGetFilter = (state) => state.pets.news.filter;
export const selectIsLoading = (state) => state.pets.isLoading;
export const selectError = (state) => state.pets.error;

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
