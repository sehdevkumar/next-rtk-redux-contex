export type UserInfoType = {
     username: string;
     userType: "admin" | "user" | "manager";
}

export type AppStateType = {
     userInfo:  UserInfoType | null,
     isLoading:boolean  | null
}


export const initialAppState: AppStateType = {
     userInfo: null ,
     isLoading: false
}