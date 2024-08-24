import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ToggleButton from "./ToggleButton";
import { useTheme } from "./Contexts/ThemeContext";
function App() {
  const { dark } = useTheme();
  return (
    <>
      <div className=" BODY h-screen w-screen bg-purple-400 dark:bg-stone-700">
        <div className="flex flex-col items-center">
          <div className=" relative pt-4 w-[500px] p-2 px-6 flex flex-col items-center space-y-5 h-[400px] mx-auto mt-10 bg-white text-black dark:bg-stone-800 rounded-md dark:text-white">
            <h1 className="text-3xl">Theme Mode</h1>
            <div className="absolute top-0  right-8 flex">
              {" "}
              <ToggleButton />
            </div>
            <h1 className="">{dark ? "Dark Theme" : "Light Theme"} </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatem, inventore quae doloribus, debitis sed vitae
              dolor dignissimos vel cupiditate illo dicta asperiores perferendis
              accusamus assumenda laudantium deserunt corrupti aliquam?
            </p>
            <button className="bg-purple-800 p-2 text-white rounded-sm text-sm font-semibold dark:bg-orange-500  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
