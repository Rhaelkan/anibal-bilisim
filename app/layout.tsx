import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anibal Bilişim | Front End Case",
  description:
    "Anibal Bilişim Front End Developer pozisyonu için Hakan Doruk tarafından yapılmıştır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121316]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
