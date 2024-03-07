import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BitcoinPriceChart = () => {
  const [viewport, setViewportWidth] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      console.log(window.visualViewport.width, "omyadav");
      setViewportWidth(
        window.visualViewport ? window.visualViewport.width : window.innerWidth
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="main rounded-lg border-2 sm:w-[60rem]   lg:w-[56rem] xl:w-[60rem]xs:m-4  bg-white   ">
        {/* <div className="section-A flex items-center">
          <div className="max-w-44 min-w-44 mx-2">
            <img src="Bitcoin.png" alt="not found" />
          </div>
          <div className=" bg-gray-500 text-white  px-4 py-2 border-2 rounded-lg">
            Rank#1
          </div>
        </div>

        <div className="section-B flex items-top gap-8 p-2">
          <div className="Money">
            <div className="text-2xl font-semibold">$46,953.04</div>
            <div className="text-xl">₹39,42,343</div>
          </div>
          <div className="h-8 bg-green-100 text-green-600 px-4 ">
          <FontAwesomeIcon icon={faChevronUp} />
            2.51%
          </div>
          <div>24H</div>
        </div>

        <hr className="h-2 my-6" />

        <div className="section-C flex justify-between items-center p-2">
          <div className="text-2xl">Bitcoin Price Chart (USD)</div>
          <div className="flex gap-4 cursor-pointer ">
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">1H</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">24H</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">7D</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">1M</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">3M</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">6M</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">1Y</span>
            <span className="hover:bg-green-200 p-2 px-4 rounded-lg ">ALL</span>
          </div>
        </div> */}
        <div className="section-D  sm:block  hidden  overflow-hidden">
          <TradingViewWidget
            symbol={"BITSTAMP:BTCUSD"}
            height={725}
            width={953}
            // height={viewport>=375 ? 450 : 725}
            // width={viewport>=375 ? 458: 940}
            fontsize={12}
            hideDateRanges={false}
          />
        </div>
        
        <div className="mobile sm:hidden  ">
          <TradingViewWidget
            symbol={"BITSTAMP:BTCUSD"}
            height={350}
            width={350}
            // height={viewport>=375 ? 450 : 725}
            // width={viewport>=375 ? 458: 940}
            fontsize={6}
            hideDateRanges={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BitcoinPriceChart;
