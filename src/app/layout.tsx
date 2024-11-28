import localFont from "next/font/local";
import "./globals.css";
import { FC, PropsWithChildren, } from "react";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <Main>
        {children}
        </Main>
      </body>
    </html>
  );
}
export default RootLayout;