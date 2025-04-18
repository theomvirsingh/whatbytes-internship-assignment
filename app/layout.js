import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Test | WhatBytes",
  description:
    "Discover a skilled team that effortlessly meets all your project demands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <NavBar />

        <div className="flex flex-1 overflow-hidden">
          <SideBar />

          <main className="ml-[16.67%] w-5/6 flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
