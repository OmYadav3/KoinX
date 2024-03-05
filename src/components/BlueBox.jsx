import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlueBox = () => {
  return (
    <div>
      <div className="bluebox">
        <div className="main w-[25rem]  boder-2 bg-blue-600 my-4 p-12 text-white  rounded-lg flex flex-col justify-center items-center gap-6">
          <div className="section-A text-2xl font-[600]">
            Get Started with koinX for FREE
          </div>
          <div className="section-B text-center">
            With our range of features that you can equip for free, KoinX allow
            you to be more educated and aware of your tax reports{" "}
          </div>
          <div className="section-C">
            <img src="/illusration-girlwithtablet.png" alt="not found " />
          </div>
          <div className="section-D  border-2 text-lg text-blue-900 font-semibold bg-white px-8 py-4 rounded-lg">
            <button>
              Get Started for FREE{" "}
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="Trendingcoins border-2 rounded-lg p-4 ">

          <div className="section-A mb-8 mt-4 ml-16 text-2xl font-bold">Trending Coins (24)</div>

          <div className="section-B flex flex-col justify-center gap-4">
            <div className="flex justify-between items-center">
            <div className="coinnames flex justify-center items-center ">
                <div className="min-w-8 max-w-8">
                  <img src="/logo-1.png" alt="not found" />
                </div>
                <div>Ethereum(ETH)</div>
              </div>
              <div className="h-8 bg-green-100 text-green-600 px-4 ">
                <FontAwesomeIcon icon={faChevronUp} />
                8.21%
              </div>
            </div>
             

            <div className="flex justify-between items-center">
            <div className="coinnames flex justify-center items-center ">
                <div className="min-w-8 max-w-8">
                  <img src="/logo-2.png" alt="not found" />
                </div>
                <div>Bitcoin(BTC)</div>
              </div>
              <div className="h-8 bg-green-100 text-green-600 px-4 ">
                <FontAwesomeIcon icon={faChevronUp} />
                5.26%
              </div>
            </div>
             

            <div className="flex justify-between items-center">
            <div className="coinnames flex justify-center items-center ">
                <div className="min-w-8 max-w-8">
                  <img src="/logo-3.png" alt="not found" />
                </div>
                <div>Polygon(MATIC)</div>
              </div>
              <div className="h-8 bg-green-100 text-green-600 px-4 ">
                <FontAwesomeIcon icon={faChevronUp} />
                4.32%
              </div>
            </div>
             

            
          </div>


        </div>
      </div>
    </div>
  );
};

export default BlueBox;
