"use client";

import { usePathname } from "next/navigation";
export default function page() {
  /**
   * 获取当前的url
   */

  const path = usePathname();

  return (
    <>
      <div>{path}</div>
    </>
  );
}
