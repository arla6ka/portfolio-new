import type { Metadata } from "next";
import { geistSans, geistMono, consolas, overusedGrotesk } from './fonts'
import "./globals.css";
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Arlan @Design Engineer",
  description: "Personal website",
  openGraph: {
    title: 'Arlan @Design Engineer',
    description: 'Personal website',
    url: 'https://arlan.me',
    siteName: 'Arlan Portfolio',
    images: [
      {
        url: '/123.png', // Путь к картинке для превью
        width: 1200,
        height: 630,
        alt: 'Hello'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  }
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
