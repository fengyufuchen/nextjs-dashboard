"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const msg = useSearchParams().get("error");

  return <p>Sorry, something went wrong{msg}</p>;
}
