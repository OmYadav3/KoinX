import React from "react";
import Navbar from "./components/Navbar";
import BitcoinPriceChart from "./components/BitcoinPriceChart";
import BlueBox from "./components/BlueBox";
import Performance from "./components/Performance";
import Navbar1 from "./components/Navbar1";
import Sentiment from "./components/Sentiment";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (  
    <div className="">
      <Navbar />
      <div className="ml-[2.5rem] p-2 mt-4 flex gap-2 justify-start ml-[6rem]">
        <span className="opacity-60">Cryptocurriences</span>
         <div>>></div>
        <div> Bitcoins</div>
      </div>

      <div className="flex justify-center ml-[2rem] ">
        <div className="">
          <div>
            <BitcoinPriceChart />
          </div>
          <div className="m-4 mt-8 ">
            <Navbar1 />
          </div>
        </div>
        <div>
          <BlueBox />
        </div>
      </div>
      <div className="ml-[4rem]">
        <Performance />
        <Sentiment/>
      </div>
      <div className="ml-[4rem] mt-6">
        <AboutPage/>
      </div>
    </div>
  );
};

export default App;
