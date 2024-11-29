import type { Metadata } from "next";
import { geistSans, geistMono, consolas, overusedGrotesk } from './fonts'
import "./globals.css";
import Footer from '@/app/components/Footer';

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
    <html 
      lang="en" 
      className={`
        bg-neutral-900 
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${consolas.variable} 
        ${overusedGrotesk.variable}
      `}
    >
      <body className="min-h-screen antialiased">
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
