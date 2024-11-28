import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from '@/app/components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arlan @Design Engineer", 
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-neutral-900">
      <body className="min-h-screen antialiased">
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
