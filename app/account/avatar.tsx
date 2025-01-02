import { createClient } from "@/app/utils/supabase/client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | null;
  url: string | null;
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = createClient();
  console.log("Avatar", uid, url, size);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);

  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    async function downloadImg(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }
        console.log("downloadImg", data);
        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("downloadImg", error);
      }
    }
    console.log("url", url);
    if (url) {
      downloadImg(url);
    }
  }, [url, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("you must select an image to upload");
      }
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      console.log("uploadAvatar", data, error);

      onUpload(filePath);
    } catch (error) {
      console.log("uploadAvatar", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {avatarUrl ? (
        <Image width={size} height={size} src={avatarUrl} alt=""></Image>
      ) : (
        <div className="avatar no-image" style={{ height: size, width: size }}>
          no image
        </div>
      )}

      <div style={{ width: size }}>
        <label className="button primary block" htmlFor="single">
          {uploading ? "uploading" : "upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
