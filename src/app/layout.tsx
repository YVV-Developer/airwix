import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Airwix Technologies: ERP Solutions for Small to Mid-Size Businesses",
  description: "Simplify your operations with Airwix Technologies' customizable ERP software. Our web-based ERP helps small to mid-size businesses in manufacturing, retail, and more to work smarter and make informed decisions.",
  icons: {
    icon: "/logo02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
