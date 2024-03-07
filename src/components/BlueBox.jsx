import { faArrowRight, faChevronUp, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const BlueBox = () => {
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        if (jsonData?.coins?.length > 3) {
          jsonData.coins.splice(3);
        }
        console.log(jsonData.coins, "sirji");
        setCoinData(jsonData.coins);
      } catch (err) {
        console.error(err, "Error in fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bluebox w-max">
        <div className="main lg:w-[24rem] bg-[#0052fe] mb-2 xs:p-12 p-6 text-white  rounded-lg flex flex-col justify-center items-center gap-6">
          <div className="mobile flex xs:flex-col flex-col-reverse gap-2  ">
            <div className="first">
              <div className="section-A xs:text-2xl text-xl text-center font-[600]">
                Get Started with koinX for FREE
              </div>
              <div className="section-B text-center my-2 text-sm xs:text-lg">
                With our range of features that you can equip for free, KoinX
                allow you to be more educated and aware of your tax reports{" "}
              </div>
            </div>
            <div className="sec">
              <div className="section-C">
                <img src="/illusration-girlwithtablet.png" alt="not found " />
              </div>
            </div>
          </div>

          <div className="section-D  border-2 text-lg text-blue-900 font-semibold bg-white xs:px-8 px-6 xs:py-4 py-2 rounded-lg">
            <button>
              Get Started for FREE{" "}
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className=" w-full bg-white Trendingcoins rounded-lg p-4 ">
          <div className="w-full section-A mb-8 mt-4 ml-12 text-2xl font-bold">
            Trending Coins (24h)
          </div>
          <div className="trending-coins w-full ">
            {coinData &&
              coinData.map(({ item }, index) => {
                if (item.coin_id === 33511 || item.coin_id === 29850) {
                  return null;
                }
                const priceChange =
                  item.data.price_change_percentage_24h.usd.toFixed(2);

                return (
                  <div
                    key={index}
                    className="w-full flex justify-between p-4 items-center "
                  >
                    <div className="NSP flex gap-2 justify-center">
                      <div className=" min-w-8 max-w-8">
                        <img src={item.thumb} alt="" />
                      </div>
                      <div>{item.name}</div>
                      <div>{item.symbol}</div>
                      </div>
                      <div className=" text-sm">
                      {priceChange < 0 ? (
                        <div className="text-red-500 p-1 bg-red-100 rounded-lg flex gap-2">
                          <FontAwesomeIcon icon={faSortDown} />
                          <span>{Math.abs(priceChange)}</span>
                        </div>
                      ) : (
                        <div className="text-green-500 p-1 bg-green-100 rounded-lg  gap-2 flex items-end justify-center">
                          <FontAwesomeIcon icon={faSortUp} />
                          <span> {priceChange}</span>
                        </div>
                      )}
                      </div>
                    
                  </div>
                );
              })}
          </div>

          {/* <div className="section-B flex flex-col justify-center gap-4">
            <div className="flex justify-between items-center">
              <div className="coinnames flex justify-center items-center ">
                <div className="min-w-8 max-w-8">
                  <img src="/logo-1.png" alt="not found" />
                </div>
                <div>Ethereum(ETH)</div>
              </div>
              <div className="h-8 bg-green-100 text-green-600 px-4 ">
                
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlueBox;
