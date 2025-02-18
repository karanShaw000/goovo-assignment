import type { Metadata } from "next";
import { Outfit, DM_Sans, Mochiy_Pop_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import VerficationBackdrop from "@/components/common/VerficationBackdrop";
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"]
});

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-mochiy",
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Home",
  description: "This is Goovo Frontend Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${mochiyPopOne.variable}`}>
      <body
        className={` font-outfit antialiased`}
      >
        <VerficationBackdrop />
        <main className="max-w-screen-md mx-auto px-4">
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
