"use client";

import { useTheme } from "./ClientThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme, useSystem, setUseSystem } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
      <div className="text-xl font-bold">Lazar Vidojevic</div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
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
    </nav>
  );
}
