import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    "https://ckaqneuqpadsdomnzxww.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrYXFuZXVxcGFkc2RvbW56eHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MjIzMzMsImV4cCI6MjA0NzM5ODMzM30.nxXTmnteo_RK34emavEGnKylLMQsKcIHTa5S3JKgRGE",
    {
      cookies: {
        getAll() {
          // console.log("supabase serverClient cookies-getAll:", cookieStore.getAll());
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            console.log("supabase serverClient cookies-setAll:", cookiesToSet);
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}