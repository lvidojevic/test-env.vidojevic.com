"use client"; // needed for React hooks

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Lazar Vidojevic",
  description: "Personal website & portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [useSystem, setUseSystem] = useState(true);

  // Load theme & preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedUseSystem = localStorage.getItem("useSystem") === "false" ? false : true;

    setUseSystem(savedUseSystem);

    if (savedUseSystem) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    } else if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to <html> element and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    localStorage.setItem("useSystem", String(useSystem));
  }, [theme, useSystem]);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setUseSystem(false); // disable system preference if manually toggled
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <Navbar />
        <main className="flex-1">
          {/* Toggle & System checkbox */}
          <div className="p-4 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 border rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={useSystem}
                onChange={(e) => setUseSystem(e.target.checked)}
              />
              Use system preference
            </label>
          </div>

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
