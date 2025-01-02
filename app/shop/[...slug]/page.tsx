"use client";

import { usePathname, useParams, useSearchParams } from "next/navigation";
export default function page() {
  /**
   * 获取当前的url
   */

  const path = usePathname();
  /**
   * 获取动态路由参数
   */
  const params = useParams();
  /**
   * 获取查询字符串
   */
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams);

  return (
    <>
      <div>{path}</div>
      <div>{JSON.stringify(params)}</div>
      <div>{JSON.stringify(Object.fromEntries(searchParams))}</div>
    </>
  );
}
