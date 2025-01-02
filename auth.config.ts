
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/nextdocs/login"
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {



            const isLoggedIn = !!auth?.user
            //             const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
            //             if (isOnDashboard) {
            //                 if (isLoggedIn) {
            //                     return true;
            //                 }
            //                 return false;
            //             } else if (isLoggedIn) {


            //                 /**
            //                  * const nextUrl = "https://example.com/some/path";
            // const absoluteUrl = "/dashboard";
            // const url = new URL(absoluteUrl, nextUrl);

            // console.log(url.href); // 输出: https://another-example.com/dashboard

            //                  */
            //                 if()

            //                 return Response.redirect(new URL("/dashboard", nextUrl))
            //             }

            if (!isLoggedIn) {
                return false;
            }

            return true;
        }
    }
} satisfies NextAuthConfig;

