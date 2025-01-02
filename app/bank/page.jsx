"use client";
import Link from "next/link";
import { useState, use } from "react";
import FetchDemo from "./components/FetchDemo";
import { Suspense } from "react";
import { useMemo } from "react";
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return {
    message: " This is a bank ",
    error:"this is error info"
  };
}

export default function Page() {
  
  const [count, setCount] = useState(0);
  // const { message } = await getData();
  let message = "message";
  const studentPromise = useMemo(() => {
    console.log("fetching students");
    return fetch("http://localhost:3000/api/students");
  }, []);
  debugger
  const resHello = use(studentPromise);
  if (!resHello.ok) {
    throw new Error("Failed to fetch");
  }

  console.log("resHello", resHello);

  const textHello = "abc";
  console.log("textHello", textHello);

  return (
    <>
      <div>
        {message}-{count}
      </div>
      <Suspense>
        <FetchDemo textHello={textHello}></FetchDemo>
      </Suspense>
      {Array.from({ length: 3 }, (_, index) => index + 20).map(
        (item, index) => {
          return (
            <Link href={`/photo/${item}`} key={index}>
              <img
                key={index}
                src={`https://picsum.photos/id/${item}/200/300`}
                alt="random"
              />
            </Link>
          );
        }
      )}
    </>
  );
}
