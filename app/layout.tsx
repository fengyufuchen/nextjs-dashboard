import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Script from "next/script";
export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex w-2/3 mx-auto container border-solid border-2 border-green-300 flex-col">
          <p> This is root layout </p>
          {/* <div className="flex justify-center text-blue-500 p-2 gap-6 ">
            <Link href="/">Home</Link>
            <Link href="/visitors">Visitor</Link>
          </div>
          <div className="flex gap-4 justify-center">
            {team}
            {analytics}
          </div> */}
          <div>
            <div>{children}</div>
            <Script src="/demo.js"></Script>
            <Script src="https://www.google.com/recaptcha/api.js"></Script>
          </div>
        </div>
      </body>
    </html>
  );
}
