import { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { handleThemeSwitch, theme };
};

export default useThemeSwitch;
