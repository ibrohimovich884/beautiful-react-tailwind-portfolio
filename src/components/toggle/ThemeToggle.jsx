import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "./Toggle.css";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkMode ? (
        <Sun className="theme-icon sun-icon" />
      ) : (
        <Moon className="theme-icon moon-icon" />
      )}
    </button>
  );
};
