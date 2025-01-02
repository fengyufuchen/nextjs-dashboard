import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  console.log("-----------------------------------------");
  //使用了NextResponse.next()方法来继续处理请求，并返回一个响应对象
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supbase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          // console.log("auth.getUser-cookies-geAll", request.cookies.getAll());
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
      
          console.log("auth.getUser-cookies-setAll", cookiesToSet);
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          //为什么做这个? 前面不是已经请求了吗?
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const getaUserData = await supbase.auth.getUser();
  // console.log("supabase.auth.getaUserData", getaUserData);
  return supabaseResponse;
}
