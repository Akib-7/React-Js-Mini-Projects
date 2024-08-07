import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <>
      <header className="bg-transparent backdrop-filter backdrop-blur-lg shadow-lg shadow-lime-400 fixed p-3 py-4 px-10 z-50 w-screen left-0 top-0">
        <nav>
          <ul className="flex flex-row space-x-6 justify-start ">
            <li className="">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `
                   ${
                     isActive
                       ? "text-lime-400 border-lime-400 border-[1px]"
                       : "bg-transparent text-white"
                   }
                   rounded-xl border-white border-[1px]
                   p-1 px-3
                   font-bold
                   
                `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `
                   ${
                     isActive
                       ? "text-lime-400 border-lime-400 border-[1px]"
                       : "bg-transparent text-white"
                   }
                   rounded-xl border-white border-[1px]
                   p-1 px-3
                   font-bold
                   
                `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/githubLoader"
                className={({ isActive }) =>
                  `
                   ${
                     isActive
                       ? "text-lime-400 border-lime-400 border-[1px]"
                       : "bg-transparent text-white"
                   }
                   rounded-xl border-white border-[1px]
                   p-1 px-3
                   font-bold
                   
                `
                }
              >
                github-loader
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/githubCustomHook"
                className={({ isActive }) =>
                  `
                   ${
                     isActive
                       ? "text-lime-400 border-lime-400 border-[1px]"
                       : "bg-transparent text-white"
                   }
                   rounded-xl border-white border-[1px]
                   p-1 px-3
                   font-bold
                   
                `
                }
              >
                github-customHook
              </NavLink>
            </li>
            <li className="text-white flex">
              {" "}
              <ToggleButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
