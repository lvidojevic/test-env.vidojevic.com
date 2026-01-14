"use client";

import Link from "next/link";
import { useTheme } from "./ClientThemeProvider";

export default function Footer() {
  const { theme, toggleTheme, useSystem, setUseSystem } = useTheme();

  return (
    <footer
      className={`border-t transition-colors ${
        theme === "dark" ? "border-gray-700 bg-gray-900 text-gray-100" : "border-gray-200 bg-white text-gray-900"
      } mt-24`}
    >
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        {/* Navigation Links */}
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/cv">CV</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Copyright + Theme Controls */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Lazar Vidojevic</p>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 border rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={useSystem}
                onChange={(e) => setUseSystem(e.target.checked)}
              />
              Use system preference
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}
