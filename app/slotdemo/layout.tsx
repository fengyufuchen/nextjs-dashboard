import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
export default function SlotDemoLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="flex w-2/3 mx-auto container border-solid border-2 border-green-300 flex-col">
      <div className="flex justify-center text-blue-500 p-2 gap-6 ">
        <Link href="/">Home</Link>
        <Link href="/slotdemo/visitors">Visitor</Link>
      </div>
      <div className="flex gap-4 justify-center">
        {team}
        {analytics}
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
