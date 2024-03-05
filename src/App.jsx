import React from "react";
import Navbar from "./components/Navbar";
import BitcoinPriceChart from "./components/BitcoinPriceChart";
import BlueBox from "./components/BlueBox";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="ml-28 p-2 mt-4">
        <span className="opacity-60">Cryptocurriences</span> <span>>></span>{" "}
        <span> Bitcoins</span>
      </div>

      <div className="flex justify-center bg-zinc-50">
        <BitcoinPriceChart />
        <BlueBox />
      </div>
    </div>
  );
};

export default App;
