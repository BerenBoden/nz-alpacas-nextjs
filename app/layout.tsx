import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/index";
import CartSlideOver from "@/components/ui/cart-slide-over";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Zealand Alpacas LTD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        <CartSlideOver />
        {children}
      </body>
    </html>
  );
}
