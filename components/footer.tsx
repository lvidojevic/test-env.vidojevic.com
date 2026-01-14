"use client";

import { useTheme } from "./ClientThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`p-4 text-center transition-colors ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      © {new Date().getFullYear()} Lazar Vidojevic. All rights reserved.
    </footer>
  );
}
