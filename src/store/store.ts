import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loggerMiddleware } from "./middleware";

// Configure the store
export const appStore = configureStore({
  reducer: {
    app: appReducer, // Use a descriptive key for the reducer,
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(loggerMiddleware),
});

// Type for the RootState
type RootState = ReturnType<typeof appStore.getState>;

// Custom hooks
export const useAppDispatch = () => useDispatch<typeof appStore.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
