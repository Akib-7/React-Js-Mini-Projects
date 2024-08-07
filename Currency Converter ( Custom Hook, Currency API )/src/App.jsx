import { CurrencyCard } from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      <div className=" main">
        <div className="TOP HEADING ">
          <span className="text-white font-semibold text-4xl">
            Currency Converter
          </span>
          <h1 className="text-lime-600 opacity-70">
            @Using <span className="font-bold">Custom Hook</span> &{" "}
            <span className="font-bold">Currency API</span>
          </h1>
        </div>

        <div className="CARD mt-10 flex justify-center items-center">
          <CurrencyCard />
        </div>
      </div>
    </>
  );
}

export default App;
