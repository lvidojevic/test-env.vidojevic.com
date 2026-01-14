"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  useSystem: boolean;
  toggleTheme: () => void;
  setUseSystem: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ClientThemeProvider");
  return context;
}

export default function ClientThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [useSystem, setUseSystem] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedUseSystem = localStorage.getItem("useSystem") !== "false"; // default true

    setUseSystem(savedUseSystem);

    if (savedUseSystem) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    } else if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
    localStorage.setItem("useSystem", String(useSystem));
  }, [theme, useSystem]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setUseSystem(false); // disable system preference if manually toggled
  };

  return (
    <ThemeContext.Provider value={{ theme, useSystem, toggleTheme, setUseSystem }}>
      {children}
    </ThemeContext.Provider>
  );
}
