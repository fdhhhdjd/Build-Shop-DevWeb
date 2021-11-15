import React, { useState, createContext, useEffect } from "react";
const themes = {};
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => {
  //   localStorage.setItem("isDark", JSON.stringify(!isDark));
  //   setIsDark(!isDark);
  // };
  // const theme = isDark ? themes.dark : themes.light;

  // useEffect(() => {
  //   const isDark = localStorage.getItem("isDark") === "true";
  //   setIsDark(isDark);
  // }, []);
  const [theme, setTheme] = useState(
    // {
    //   isFlag: false,
    //   dark: {
    //     backgroundColor: "black",
    //     color: "white",
    //   },
    //   light: {
    //     backgroundColor: "white",
    //     color: "black",
    //   },
    //   common: {
    //     transition: "all 1s ease",
    //   },
    // },
    localStorage.getItem("themes")
  );
  const [search, setSearch] = useState("");
  const ToggleTheme = () => {
    setTheme({
      ...theme,
      isFlag: !theme.isFlag,
    });
  };
  console.log(theme);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("themes", theme);
  }, [theme]);

  const ThemeContextData = {
    theme,
    setTheme,
    ToggleTheme,
    search,
    setSearch,
  };
  return (
    <ThemeContext.Provider
      value={ThemeContextData}
      // value={[{ theme, isDark }, toggleTheme]}
    >
      {children}
    </ThemeContext.Provider>
  );
};
