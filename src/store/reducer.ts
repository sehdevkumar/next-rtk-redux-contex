import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { initialAppState, UserInfoType } from "./state";
import { ActionSetAppLoading, ActionSetUserInfo } from "./action";

// Define the async thunk
export const fetchUserInfo = createAsyncThunk(
  "app/fetchUserInfo",
  async (payload: any) => {

    try {
      return payload;
     
    } catch (error) {
      console.error("Error fetching user info:", error);
    }

  }
);



export const appReducer = createReducer(initialAppState, (builder) => {

  builder.addCase(ActionSetUserInfo, (state, payload) => {
    return {
      ...state,
      userInfo: payload.payload
    }
  }),
    builder?.addCase(ActionSetAppLoading, (state, payload) => {
      return {
        ...state,
        isLoading: payload.payload
      };
    });

  builder.addCase(fetchUserInfo.pending, (state, action) => {
    return {
      ...state,
      isLoading: true
    }
  });

  builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
    return {
      ...state,
      isLoading: false,
      userInfo: action.payload
    }
  });

  builder.addCase(fetchUserInfo.rejected, (state, action) => {
    return {
      ...state,
      isLoading: false
    }

  });

})



