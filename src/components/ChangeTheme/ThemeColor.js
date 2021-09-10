import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../UseContext/ChangeTheme/ChangeTheme";
import "./ThemeColor.css";
const ThemeColor = () => {
  // const [{ theme, isDark }, ToggleTheme] = useContext(ThemeContext);
  const { ToggleTheme, theme } = useContext(ThemeContext);
  const { isFlag, common, dark, light } = theme;
  const styleColor = { ...common };
  return (
    <div>
      <i
        className={isFlag ? "fas fa-sun" : "fas fa-moon"}
        style={styleColor}
        onClick={ToggleTheme}
      />
    </div>
  );
};

export default ThemeColor;
