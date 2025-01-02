"use client";
import { useSelectedLayoutSegment } from "next/navigation";
export default function layout({
  children,
  milkTea,
}: {
  children: React.ReactNode;
  milkTea: React.ReactNode;
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment("milkTea");
  console.log("selectedLayoutSegment", selectedLayoutSegment);

  return (
    <>
      <div className="text-center">This is bank layout</div>
      <div className="flex justify-center items-center">{milkTea}</div>
      <div>{children}</div>
    </>
  );
}
