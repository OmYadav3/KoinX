import React from "react";
import Navbar from "./components/Navbar";
import BitcoinPriceChart from "./components/BitcoinPriceChart";
import BlueBox from "./components/BlueBox";
import Performance from "./components/Performance";
import Navbar1 from "./components/Navbar1";
import Sentiment from "./components/Sentiment";
import AboutPage from "./components/AboutPage";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

const App = () => {
  return (
    <div className="bg-[#eff2f5]">
      <Navbar />
      <div className="  ">
        <div className="xs:ml-[2.5rem] p-2 mt-4 flex text-sm justify-start lg:ml-[4rem]">
          <span className="">Cryptocurriences</span>
          <div>&gt;&gt;</div>
          <div> Bitcoins</div>
        </div>

        <div className="main flex lg:flex-row  flex-col justify-center ">
          <div className="left  ">
            <div className="flex justify-center">
              <div className=" flex flex-col justify-center items-center">
                <div >
                  <BitcoinPriceChart />
                </div>
                <div className="p-2 ">
                  <Navbar1 />
                </div>
              </div>
            </div>
            <div className="lg:ml-[1rem] sm:mx-4 lg:mx-[1rem]">
              <Performance />
              <Sentiment />
            </div>
            <div className="AboutPage lg:ml-[1rem] mt-6  sm:mx-4 lg:mx-[1rem]">
              <AboutPage />
            </div>
            <div className=" Tokenomics lg:ml-[1rem] mt-6  sm:mx-4 lg:mx-[1rem]">
              <Tokenomics />
            </div>
            <div className=" Team lg:ml-[1rem] mt-6  sm:mx-4 lg:mx-[1rem]">
              <Team />
            </div>
          </div>
        <div className="right sm:mx-2 ">
          <div className="lg:mr-2">
            <BlueBox />
          </div>
        </div>
        </div>
          <div className="lg:mt-6"><YouMayAlsoLike/></div>
      </div>
    </div>
  );
};

export default App;
