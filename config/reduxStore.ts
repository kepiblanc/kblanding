import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { guarantorsApi } from "@/api-services/guarantors";

export const reduxStore = configureStore({
  reducer: {
    [guarantorsApi.reducerPath]: guarantorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([guarantorsApi.middleware]),
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
