import { useAppSelector } from "./store";

export const selectUserInfo = useAppSelector(s=> s.app.userInfo);
export const selectLoading = useAppSelector((s) => s.app.isLoading);
