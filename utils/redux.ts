import { configureStore } from "@reduxjs/toolkit";
import config from "@utils/config";
import logger from "redux-logger";
import example from "@modules/example";

const store = configureStore({
  reducer: {
    example,
    // ... add more store
  },
  middleware: (getDefaultMiddleware) =>
    config.ENV === "production"
      ? getDefaultMiddleware()
      : getDefaultMiddleware().concat(logger),
  devTools: config.ENV !== "production",
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
