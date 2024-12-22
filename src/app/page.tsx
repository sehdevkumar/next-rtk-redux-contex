"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      {date?.toUTCString()}
      Hello world
    </div>
  );
}
