import { updateSession } from "@/app/utils/supabase/middleware";
import NextAuth from "next-auth";

import { authConfig } from "./auth.config.ts";
console.log("NextAuth(authConfig).auth", NextAuth(authConfig).auth);

export default NextAuth(authConfig).auth;

// export async function middleware(request) {
//   // return await updateSession(request);
// }

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
