import { createAction } from "@reduxjs/toolkit";
import { UserInfoType } from "./state";

export const ActionSetUserInfo = createAction<UserInfoType>("SET-USER-INFO");
export const ActionSetAppLoading = createAction<boolean>("SET-APP-LOADING");
