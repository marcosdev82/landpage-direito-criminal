import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
