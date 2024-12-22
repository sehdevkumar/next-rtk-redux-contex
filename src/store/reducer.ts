import { createReducer } from "@reduxjs/toolkit";
import { initialAppState } from "./state";
import { ActionSetAppLoading, ActionSetUserInfo } from "./action";



export const appReducer = createReducer(initialAppState,(builder)=>{

    
    builder.addCase(ActionSetUserInfo,(state, payload)=> { 
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
})