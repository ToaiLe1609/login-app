"use client";

import { atomAuthToken } from "@src/app-state/accessToken";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useAtom<any>(atomAuthToken);
  React.useEffect(() => {
    console.log(token);
  }, [token]);
  if (token?.access) {
    router.push("home");
  } else {
    router.push("login");
  }

  return <>{children}</>;
};
