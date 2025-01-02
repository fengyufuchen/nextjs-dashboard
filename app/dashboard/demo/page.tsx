"use client";
import { useState, useTransition, useRef } from "react";
import { updateName } from "@/app/lib/demoActions";
import FancyText from "@/app/ui/FancyText";
export default function Page() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [res, setRes] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();



  const submitAction = async (formData: FormData) => {
    debugger;
    startTransition(async () => {
      const { error, products, promiseProp } = await updateName(
        formData.get("name") as string
      );
      if (products) {
        setRes(products);
        const promRes = await promiseProp;
        console.log("promRes", promRes);
      }
      if (error) {
        setError(error);
      } else {
        setName("");
      }
    });
  };
  return (
    <>
      <FancyText title="title" text="text"></FancyText>
      <form action={submitAction}>
        <input
          type="text"
          name="name"
          disabled={isPending}
          ref={nameInputRef}
        ></input>
        {error && <p>{error}</p>}
        {res && <p>{JSON.stringify(res)}</p>}
      </form>
    </>
  );
}
