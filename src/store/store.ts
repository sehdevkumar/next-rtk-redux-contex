import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configure the store
export const appStore = configureStore({
  reducer: {
    app: appReducer, // Use a descriptive key for the reducer,
  },
});

// Type for the RootState
type RootState = ReturnType<typeof appStore.getState>;

// Custom hooks
export const useAppDispatch = () => useDispatch<typeof appStore.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
