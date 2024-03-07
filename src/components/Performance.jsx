import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Performance = () => {
  return (
    <div className="bg-white"> 
      <div className="main border-2  my-2 rounded-lg lg:w-[60rem]">
        <div className="PerFormance sm:m-8 m-2 text-4xl p-2 font-semibold">Performance</div>
        <div className=" sm:m-8 mx-2 text-xs sm:text-xl">
          <div className="Low-High-bar flex justify-between items-center p-2">
            <div className="lower flex flex-col gap-2 ">
              <div>Today's Low</div>
              <div>46,930.22</div>
            </div>
            <div className=" h-2  rounded-lg sm:w-[34rem] w-[8rem] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="Higher flex flex-col gap-2 sm:text-xl">
              <div>Today's High</div>
              <div>49,343.83</div>
            </div>
          </div>
        </div>
        <div className=" sm:mx-8 mx-2 text-xs sm::text-xl">
          <div className="Low-High-bar flex justify-between items-center p-2">
            <div className="lower  flex flex-col gap-2 sm:text-xl">
              <div>52W Low</div>
              <div>16,930.22</div>
            </div>
            <div className=" h-2 rounded-lg sm:w-[34rem] w-[10rem] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="Higher flex flex-col gap-2 sm:text-xl">
              <div>52W High</div>
              <div>49,743.83</div>
            </div>
          </div>
          <div></div>
        </div>
        
        <div id='fundamentals' className=" text-2xl px-2 text-gray-500 sm:mx-8 mx-2 my-4 font-semibold">Fundamentals <FontAwesomeIcon className='ml-2' icon={faCircleInfo} /></div>

        <div className="grid sm:grid-cols-2 gap-0 sm:mx-8 mx-2 my-2 px-2">
          <div className="Table-1  flex flex-col mr-4 ">
            <div className="flex justify-between py-4">
              <div className=" text-gray-500">Bitcion</div>
              <div className = ''>$16,815.46</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" text-gray-500">24h Low /24h High</div>
              <div className = ''>$16,382.07/$16,874.12</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className="text-gray-500">7d Low / 7d High</div>
              <div className = ''>$16,382.07/$16,874.12</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" text-gray-500">Trading Volume</div>
              <div className = ''>$23,249,202,782</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" text-gray-500">Market Cap Rank</div>
              <div className = ''>#1</div>
            </div>
            <hr className="h-2"/>
          </div>

          <div className="Table-2 sm:ml-4">
            <div className="flex justify-between py-4">
              <div className="text-gray-500">Market Cap</div>
              <div className = ''>$323,507,290,047</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between  py-4">
              <div className=" text-gray-500">Market Cap Dominance</div>
              <div className = ''>38.343%</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between  py-4">
              <div className=" text-gray-500">Volume / Market Cap</div>
              <div className = ''>0.0178</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-2">
              <div className=" text-gray-500">All-Time High</div>
              <div className="flex flex-col text-sm">
                <div className = ''>
                  $69,044.77 <span className="text-red-500">-75.6%</span>
                </div>
                <div>Nov 10, 2021</div>
              </div>
            </div>
              <hr className="h-2"/>
            <div className="flex justify-between py-2">
              <div className=" text-gray-500">All-Time Low</div>
              <div className="flex flex-col text-sm">
                <div className = ''>
                  $67.81 <span className="text-green-500">24729.1%</span>
                </div>
                <div>july 06, 2013</div>
              </div>
            </div>
            <hr className="h-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
