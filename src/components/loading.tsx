"use client";

import { useEffect, useState } from "react";

export function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-text">
        INITIALIZING SYSTEM...
      </div>
    </div>
  );
}
