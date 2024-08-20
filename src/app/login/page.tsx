"use client";

import { atomAuthToken } from "@src/app-state/accessToken";
import { Button } from "antd";
import { useAtom } from "jotai";

export default function Page() {
  const [token, setToken] = useAtom<any>(atomAuthToken);
  return (
    <>
      <Button onClick={() => setToken({ access: "abc" })}>Login</Button>
    </>
  );
}
