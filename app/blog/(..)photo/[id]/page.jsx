"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
export default function page() {
  //https://picsum.photos/id/237/200/300
  //https://picsum.photos/id/12/200/300

  const router = useRouter();
  const params = useParams();
  console.log(router, params);

  return (
    <>
      <div>
        <div>this is in ..photo/[id]/page.jsx</div>
        <img src={`https://picsum.photos/id/${params.id}/200/300`} alt="" />
      </div>
    </>
  );
}
