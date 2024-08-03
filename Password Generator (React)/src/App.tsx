import { useEffect, useState, useCallback,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("10");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("ssa");
 var inputRef=useRef(null);
  const handleCopy=()=>{
if(inputRef.current){
  inputRef.current.select()
}
    window.navigator.clipboard.writeText(password)
  }

  var passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "123456789";
    if (char) str += "@#$%^&*()_+?>/|{},.";

    let pass = "";
    for (let i = 1; i <= Number(length); i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [number, char, length]);

  useEffect(() => {
    passwordGenerator();
  }, [number, char, length]);
  return (
    <>
      <div className="main flex flex-col items-center justify-center space-y-4">
        
        <div className="w-[700px]  p-3  mt-[30px] bg-black text-white shadow-xl rounded-lg space-y-9">
        <div className="text-4xl text-white mt-1">
          <span>Password Generator</span>
        </div>
          <div className="input+button ">
            <input
              className="w-2/3 rounded-l-md p-1   px-2 focus:outline-none text-black"
              type="text"
              name="password"
              placeholder="password"
              value={password}
              ref={inputRef}
            />
            <button
              onClick={handleCopy}
              className="w-fit h-fit bg-green-700 hover:bg-green-900 transition-all duration-200 rounded-r-md p-1 px-2"
            >
              Copy
            </button>
          </div>
          <div className="bottom flex flex-row space-x-2 items-center justify-evenly mt-3">
            <div className="flex justify-center items-center space-x-2">
              <input
                type="range"
                max={20}
                min={10}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            {/* ------------------------- */}
            <div className="flex justify-center items-center ">
              <input
                checked={number}
                onChange={() => {
                  setNumber(!number);
                }}
                type="checkbox"
              />
              <label className="mr-4 ml-1">Number</label>

              <input
                checked={char}
                onChange={() => {
                  setChar(!char);
                }}
                type="checkbox"
              />
              <label className=" ml-1">Character</label>
            </div>
          </div>
          <div className="text-gray-600 mt-[50px] text-sm" >@Mini React Project Using <span className="font-bold">useState, useEffect, useCallback and useRef</span></div>
        </div>
      </div>
    </>
  );
}

export default App;
