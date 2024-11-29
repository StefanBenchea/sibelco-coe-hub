import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { FC, PropsWithChildren, } from "react";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Footer } from "@/components/footer";


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
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;