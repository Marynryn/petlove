import { configureStore } from "@reduxjs/toolkit";

import { petsReducer } from "./reducer";
import { persistedReducer } from "./authreducer.js";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
export const store = configureStore({
  reducer: {
    // pets: petsReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
