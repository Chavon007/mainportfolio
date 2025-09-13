import "./globals.css";

import Header from "@/component/header";
import Footer from "@/component/footer";

export const metadata = {
  title: "Salvation Azuh || Web Developer",
  description: "Salvation Azuh Full-stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#19183B] h-fit container mx-auto">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
