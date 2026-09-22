import "./globals.css";

import Header from "@/component/header";

import { IBM_Plex_Mono, Manrope } from "next/font/google";

export const metadata = {
  title: "Salvation Azuh || Software Engineer",
  description: "Salvation Azuh Full-stack Software Engineer",
};

const ibemPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibemPlexMono.variable} ${manrope.variable}`}>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
