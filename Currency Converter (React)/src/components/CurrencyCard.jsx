import React, { useEffect, useState } from "react";
import useCurrency from "./hooks/useCurrency";

const CurrencyCard = () => {
  const [fromCurrency, setFromCurrency] = useState("pkr");
  const [toCurrency, setToCurrency] = useState("usd");
  const currencyRates = useCurrency(fromCurrency);
  const options = Object.keys(currencyRates);
  const [rate, setRate] = useState(0);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  useEffect(() => {
    if (currencyRates[toCurrency]) {
      setRate(currencyRates[toCurrency]);
    }
  }, [currencyRates, toCurrency]);

  const swap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setFromAmount(0);
    setToAmount(0);
  };
  const convert = () => {
    setToAmount(fromAmount * rate);
  };

  return (
    <>
      <div className="main border-[1px] border-lime-400 bg-lime-950   w-[700px] h-4350px] p-4 rounded-2xl  backdrop-blur-md ">
        <div className="TOP z-10 flex flex-col items-start p-1 w-[400px] h-max  mt-[60px]">
          <p className="text-lime-200 text-left">
            1 {fromCurrency.toUpperCase()} Equals
          </p>
          <p className="text-white text-5xl text-left w-full">
            {rate.toFixed(4)} {toCurrency.toUpperCase()}
          </p>
        </div>
        <div className="bottom mt-10 flex flex-row justify-around items-center">
          <div className="LEFT flex flex-col items-start space-y-3">
            <h1 className="text-white text-lg font-thin"> From: </h1>
            <div className="FROM w-fit h-fit bg-stone-800 flex items-center justify-center">
              <input
                className="w-[150px] focus:outline-none p-1 rounded-l-md"
                type="number"
                value={fromAmount}
                onChange={(e) => {
                  setFromAmount(Number(e.target.value));
                }}
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="text-black text-[16px] px-2 bg-lime-300 focus:outline-none rounded-r-md h-[32px]"
              >
                {options.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          {/* ------- */}
          <button
            onClick={swap}
            className="bg-transparent border-[0.5px] text-lime-400 border-lime-600 text-sm mt-[36px]  transition-all duration-200 hover:bg-lime-600 hover:text-black p-3  rounded-full"
          >
            swap
          </button>

          <div className="RIGHT flex flex-col items-start space-y-3">
            <h1 className="text-white text-lg font-thin"> To:</h1>
            <div className="TO w-fit h-fit bg-stone-800 flex items-center justify-center">
              <input
                className="w-[150px] focus:outline-none p-1   rounded-l-md"
                type="number"
                value={toAmount}
                readOnly
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="text-black text-[16px] px-2 bg-lime-300 focus:outline-none rounded-r-md h-[32px]"
              >
                {options.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={convert}
          className=" bg-lime-300 text-md mt-[36px] transition-all duration-200 hover:bg-lime-600 p-2 px-11 text-[15px] font-medium rounded-full"
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </>
  );
};

export default CurrencyCard;
