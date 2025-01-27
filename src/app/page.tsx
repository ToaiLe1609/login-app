"use client";

import { atomAuthToken } from "@src/app-state/accessToken";
import { Spin } from "antd";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <Redirect /> : <Spin />;
}

const Redirect = () => {
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
  return null;
};
