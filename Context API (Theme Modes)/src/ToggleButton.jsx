import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "./Contexts/ThemeContext";
const ToggleButton = () => {
  const { dark, toggle } = useTheme();

  useEffect(() => {
    if (dark) {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  }, [dark]);

  return (
    <>
      <label
        htmlFor="theme-toggle"
        className="relative w-[50px] h-[25px] cursor-pointer"
      >
        <input
          type="checkbox"
          id="theme-toggle"
          onChange={toggle}
          checked={dark}
          className="sr-only peer"
        />
        <span className="w-full h-full bg-gray-300 peer-checked:bg-stone-900 rounded-full absolute "></span>
        <span className="w-2/5 h-4/5 left-[3px] top-[2px] bg-purple-700 rounded-full absolute  transition-transform  peer-checked:translate-x-full peer-checked:left-[6px]  peer-checked:bg-orange-500"></span>
      </label>
    </>
  );
};

export default ToggleButton;
