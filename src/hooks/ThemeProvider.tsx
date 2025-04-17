import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  // Handle server-side rendering scenario
  if (typeof window === "undefined") return "auto";

  // Get theme from localStorage, defaulting to 'auto' if not found
  return localStorage.getItem("theme") || "auto";
};

export default function ThemeProvider({ children }) {
  // Initialize state with the result of getInitialTheme()
  const [theme, setTheme] = useState(getInitialTheme);

  // Rest of the provider implementation...
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "auto") {
      document.documentElement.dataset.theme = theme;
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.dataset.theme = mediaQuery.matches
      ? "dark"
      : "light";

    function handleChange(e) {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
