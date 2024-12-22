"use client";
import { useAppSelector } from "@/store/store";

export default function UserDetails() {
    const userInfo = useAppSelector((s) => s.app.userInfo);
    
    return (
        <div>
            {userInfo && userInfo.username ? userInfo.username : 'No User'}
        </div>
    )
}