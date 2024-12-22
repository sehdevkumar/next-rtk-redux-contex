"use client";

import { fetchUserInfo } from "@/store/reducer";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export default function Users() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo({ username: "sehdev", userType: "admin" }));
  
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul className="list-disc pl-4">
        <li>John Doe</li>
        <li>Jane Doe</li>
        <li>Bob Smith</li>
      </ul>
    </div>
  );
}
