"use client";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://ckaqneuqpadsdomnzxww.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrYXFuZXVxcGFkc2RvbW56eHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MjIzMzMsImV4cCI6MjA0NzM5ODMzM30.nxXTmnteo_RK34emavEGnKylLMQsKcIHTa5S3JKgRGE"
  );
}
