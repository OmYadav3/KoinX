import {
  faChevronLeft,
  faChevronRight,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
// import "./YouMayAlsoLike.css";

const Sentiment = () => {
//   const sentimentRef = useRef(null);

//   function handleScrollLeft(e, targetref) {
//     targetref.current.scrollLeft += 100;
//     // trendingCoinsref.current.scrollLeft += 100;
//   }
//   function handleScrollRight(e, targetref) {
//     targetref.current.scrollLeft -= 100;
//     // trendingCoinsref.current.scrollLeft -= 100;
//   }
  return (
    <div className='bg-white'id='sentiments'>
      <div className="main lg:w-[60rem] border-2 xs:p-6 p-2 rounded-lg">
        <div className="section-A font-semibold text-2xl text-gray-500">
          Sentiment
        </div>
        <div className="section-B">
          <div className="text-xl my-4 font-semibold text-gray-500">
            Key Events
            <FontAwesomeIcon className="ml-2" icon={faCircleInfo} />
          </div>
          <div
            // ref={sentimentRef}
            className=" colorboxes  flex  flex-col xs:gap-4 gap-2 overflow-auto "
          >
            <div className="blue  xs:w-[50%] min-w-[100%] bg-blue-50 rounded-lg p-4">
              <div className="flex gap-4 justify-center ">
                <div className="logo min-w-16 max-w-16">
                  <img src="/logo-4.png" alt="not found" />
                </div>

                <div className="details">
                  <div className="title font-[600] p-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                  <div className="desc text-sm p-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    eligendi earum illum fugit quod aspernatur, aliquid dolore
                    eius officia alias quisquam! Accusamus, exercitationem.
                    Nostrum optio
                  </div>
                </div>
              </div>
            </div>
            <div className="green xs:w-[50%]  min-w-[100%] flex gap-4 bg-green-50 rounded-lg p-4">
              <div className="flex gap-4 justify-center ">
                <div className="logo min-w-16 max-w-16">
                  <img src="/logo-5.png" alt="not found" />
                </div>
              </div>
              <div className="details">
                <div className="title font-[600] py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>
                <div className="desc text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  eligendi earum illum fugit quod aspernatur, aliquid dolore
                  eius officia alias quisquam! Accusamus, exercitationem.
                  Nostrum optio explicabo!
                </div>
              </div>
            </div>
            {/* <button
              onClick={(e) => {
                handleScrollRight(e, sentimentRef);
              }}
              className=" absolute left-16  mt-[7rem]  border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={(e) => {
                handleScrollLeft(e, sentimentRef);
              }}
              className=" absolute  right-0  mt-[7rem] border-[0.05rem] rounded-full p-1 px-3 bg-white"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button> */}
          </div>
        </div>
        <div className="section-C  my-4">
          <div className="text-xl my-4 font-semibold text-gray-500">
            Analyst Estimates
            <FontAwesomeIcon className="ml-2" icon={faCircleInfo} />
          </div>
          <div className="flex items-center h-[10rem]">
            <div className="percentage sm:text-4xl  sm:h-[10rem] sm:w-[10rem] font-semibold bg-green-100 text-green-600 sm:px-12 px-6 sm:py-14 py-6 rounded-[50%] mx-6 my-6 ">
              76%
            </div>
            <div className="category flex flex-col justify-around gap-6 text-xs sm:text-xl">
              <div className="flex gap-2 items-center  ">
                <div className="text-gray-500">Buy</div>
                <div className="h-2 rounded-lg sm:w-[24rem] w-[7rem] bg-gradient-to-r from-green-500  to-green-500"></div>
                <div>76%</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-gray-500">Hold</div>
                <div className="h-2 rounded-lg sm:w-[4rem] w-[1rem] bg-gradient-to-r from-gray-400 to-gray-400"></div>
                <div>8%</div>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="text-gray-500">Sell</div>
                <div className="h-2 rounded-lg sm:w-[8rem] w-[3rem] bg-gradient-to-r from-red-500  to-red-500"></div>
                <div>16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
