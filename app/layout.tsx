import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import "./globals.css";
import { Space_Mono } from "next/font/google";
import { Metadata } from "next";


const spaceMono = Space_Mono({ subsets: ["latin"],  weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "AI Image Library",
  description: "Generate images with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-dark-col-700 text-gray-300`}>
        {/* Header */}
        <Header />
        {/* Prompt Input */}
        <Prompt />
        {children}
      </body>
    </html>
  );
}
