import React, { useEffect, useRef, useState } from "react";
import CarouselSlider from "./CarouselSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./YouMayAlsoLike.css";

const YouMayAlsoLike = () => {
  const [graphdata, setGraphData] = useState();
  const youMayAlsoLikeref = useRef(null);
  const trendingCoinsref = useRef(null);

  function handleScrollLeft(e, targetref) {
    targetref.current.scrollLeft += 100;
    // trendingCoinsref.current.scrollLeft += 100;
  }
  function handleScrollRight(e, targetref) {
    targetref.current.scrollLeft -= 100;
    // trendingCoinsref.current.scrollLeft -= 100;
  }

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
        console.log(jsonData.coins, "sirji");
        setGraphData(jsonData.coins);
      } catch (err) {
        console.error(err, "Error in fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white'id='YouMayAlsoLike'>
      <div className="main border-2 p-6 ">
        <div className="YouMayAlsoLike  ">
          <div className="text-2xl font-semibold">You May Also Like</div>
          {/* <CarouselSlider slides={slides} /> */}

          <div
            ref={youMayAlsoLikeref}
            className=" coins w-full h-[12rem] p-4 flex gap-10 overflow-auto "
          >
            {graphdata &&
              graphdata.map(({ item }, index) => {
                if (item.coin_id === 33511 || item.coin_id === 29850) {
                  return null;
                }

                const priceChange =
                  item.data.price_change_percentage_24h.usd.toFixed(2);

                return (
                  <div
                    key={index}
                    className=" min-w-[12rem] flex flex-col items-center justify-center  border-2 p-4"
                  >
                    <div className="section-A flex items-center gap-2 ">
                      <div className="thumb min-w-8 max-w-8">
                        <img src={item.thumb} alt=" not found" />
                      </div>
                      <div className="symbol">{item.symbol}</div>
                      <div className=" text-[0.7rem]">
                        {priceChange < 0 ? (
                          <span className="text-red-500 p-2 bg-red-100 rounded-lg">
                            {priceChange}
                          </span>
                        ) : (
                          <span className="text-green-500 p-2 bg-green-100 rounded-lg">
                            {"+" + priceChange}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="section-B">{item.data.price}</div>
                    <div className="section-C">
                      <img src={item.data.sparkline} alt=" not found" />
                    </div>
                  </div>
                );
              })}
            <button
              onClick={(e)=>{handleScrollRight(e,youMayAlsoLikeref)}}
              className=" absolute left-2 mt-12 border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
               onClick={(e)=>{handleScrollLeft(e,youMayAlsoLikeref)}}
              className=" absolute  right-2 mt-12 border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="TrendingCoins my-6 coins">
          <div className="text-2xl font-semibold">Trending Coins</div>
          {/* <CarouselSlider slides={slides} /> */}

          <div
            ref={trendingCoinsref}
            className="coins w-full h-[12rem] p-4 flex gap-10 overflow-auto "
          >
            {graphdata &&
              graphdata.map(({ item }, index) => {
                if (item.coin_id === 33511) {
                  return null;
                }

                const priceChange =
                  item.data.price_change_percentage_24h.usd.toFixed(2);

                return (
                  <div
                    key={index}
                    className=" min-w-[12rem] flex flex-col items-center justify-center  border-2 p-4"
                  >
                    <div className="section-A flex items-center gap-2 ">
                      <div className="thumb min-w-8 max-w-8">
                        <img src={item.thumb} alt=" not found" />
                      </div>
                      <div className="symbol">{item.symbol}</div>
                      <div className=" text-[0.7rem]">
                        {priceChange > 0 ? (
                          <span className="text-red-500 p-2 bg-red-100 rounded-lg">
                            {priceChange}
                          </span>
                        ) : (
                          <span className="text-green-500 p-2 bg-green-100 rounded-lg">
                            {"+" + priceChange}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="section-B">{item.data.price}</div>
                    <div className="section-C">
                      <img src={item.data.sparkline} alt=" not found" />
                    </div>
                  </div>
                );
              })}
            <button
               onClick={(e)=>{handleScrollRight(e, trendingCoinsref)}}
              className=" absolute left-2 mt-12 border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
               onClick={(e)=>{handleScrollLeft(e, trendingCoinsref)}}
              className=" absolute  right-2 mt-12 border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
