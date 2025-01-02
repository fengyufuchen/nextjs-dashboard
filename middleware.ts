import { updateSession } from "@/app/utils/supabase/middleware";
import NextAuth from "next-auth";
import type { NextRequest } from "next/server";
// import { authConfig } from "./auth.config.js";
// console.log("NextAuth(authConfig).auth", NextAuth(authConfig).auth);

// export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {
  // return await updateSession(request);

  console.log("exec middleare.js ", request.url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.png$).*)"],
};
