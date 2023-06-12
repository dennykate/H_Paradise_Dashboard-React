import { configureStore } from "@reduxjs/toolkit";
import { itemApi } from "./api/itemApi";

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemApi.middleware),
});
