"use client";
import { type User } from "@supabase/supabase-js";

import { createClient } from "@/app/utils/supabase/client";
import { useCallback, useEffect, useState } from "react";
import Avatar from "./avatar";

export default function AccountForm({ user }: { user: User | null }) {
  const supbase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarurl] = useState<string | null>(null);
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supbase
        .from("profiles")
        .select("full_name,username, website,avatar_url")
        .eq("id", user?.id)
        .single();
      console.log("AccountForm", data, error, status);
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setFullName(data.full_name);
        setUserName(data.username);
        setWebsite(data.website);
      
        setAvatarurl(data.avatar_url); //avatar_url
      }
    } catch (error: any) {
      alert("error:" + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [user, supbase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    fullname,
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);
      const { error } = await supbase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      {/* ... */}
      <Avatar
        uid={user?.id ?? null}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarurl(url);
          updateProfile({
            fullname: fullName,
            username: userName,
            website,
            avatar_url: url,
          });
        }}
      />

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName || ""}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block  m-5 rounded-lg w-96 bg-pink-400"
          onClick={() => {
            updateProfile({
              fullname: fullName,
              username: userName,
              website: website,
              avatar_url: avatar_url,
            });
          }}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button
            className="button block m-5 rounded-lg w-96 bg-pink-400"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
