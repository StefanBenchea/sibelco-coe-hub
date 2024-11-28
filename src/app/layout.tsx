import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { FC, PropsWithChildren, } from "react";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ['latin'],
  weight: ["400", '500']
})


const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={firaSans.variable}>
        <Header />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
export default RootLayout;