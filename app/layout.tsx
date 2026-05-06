import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Loading from "./components/Loading";
import SmoothScroll from "./components/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
      <SmoothScroll />
      <CursorGlow />
        <Navbar />

        <main className="pt-15">
          {children}
        </main>

      </body>
    </html>
  );
}

