import { useEffect, useState } from "react";
import React from "react";

const ToggleButton = () => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark(!dark);
  };

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
          id="theme-toggle"
          onChange={toggleTheme}
          checked={dark}
          type="checkbox"
          className="sr-only peer"
        />
        <span className="w-full h-full bg-white peer-checked:bg-orange-800 rounded-full absolute "></span>
        <span className="w-2/5 h-4/5 left-[3px] top-[2px] bg-purple-700 rounded-full absolute  transition-transform  peer-checked:translate-x-full peer-checked:left-[6px]  peer-checked:bg-orange-500"></span>
      </label>
    </>
  );
};

export default ToggleButton;
