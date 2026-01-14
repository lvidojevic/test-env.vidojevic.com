// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientThemeProvider from "../components/ClientThemeProvider";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (Server Component)
export const metadata: Metadata = {
  title: "Lazar Vidojevic",
  description: "Personal website & portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ClientThemeProvider>
          <Navbar /> {/* Theme toggle will now live inside Navbar */}
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
