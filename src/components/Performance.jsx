import React from "react";

const Performance = () => {
  return (
    <div className="">
        
      <div className="main border-2 my-8 rounded-lg w-[55rem]">
        <div className="PerFormance m-8 text-4xl font-semibold">Performance</div>
        <div className=" m-8">
          <div className="Low-High-bar flex justify-between items-center p-2">
            <div className="lower flex flex-col gap-2 text-xl">
              <div>Today's Low</div>
              <div>46,930.22</div>
            </div>
            <div className=" h-2 rounded-lg w-[34rem] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="Higher flex flex-col gap-2 text-xl">
              <div>Today's High</div>
              <div>49,343.83</div>
            </div>
          </div>
        </div>
        <div className=" mx-8">
          <div className="Low-High-bar flex justify-between items-center p-2">
            <div className="lower  flex flex-col gap-2 text-xl">
              <div>52W Low</div>
              <div>16,930.22</div>
            </div>
            <div className=" h-2 rounded-lg w-[34rem] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="Higher flex flex-col gap-2 text-xl">
              <div>52W High</div>
              <div>49,743.83</div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="text-2xl opacity-70 mx-8 my-4 font-semibold">Fundamentals</div>

        <div className="grid grid-cols-2 gap-0 mx-8 my-2 ">
          <div className="Table-1  flex flex-col mr-4 ">
            <div className="flex justify-between py-4">
              <div className=" opacity-60">Bitcion</div>
              <div className = ''>$16,815.46</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" opacity-60">24h Low /24h High</div>
              <div className = ''>$16,382.07/$16,874.12</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className="opacity-60">7d Low / 7d High</div>
              <div className = ''>$16,382.07/$16,874.12</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" opacity-60">Trading Volume</div>
              <div className = ''>$23,249,202,782</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-4">
              <div className=" opacity-60">Market Cap Rank</div>
              <div className = ''>#1</div>
            </div>
            <hr className="h-2"/>
          </div>

          <div className="Table-2 ml-4">
            <div className="flex justify-between py-4">
              <div className="opacity-60">Market Cap</div>
              <div className = ''>$323,507,290,047</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between  py-4">
              <div className=" opacity-60">Market Cap Dominance</div>
              <div className = ''>38.343%</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between  py-4">
              <div className=" opacity-60">Volume / Market Cap</div>
              <div className = ''>0.0178</div>
            </div>
            <hr className="h-2"/>
            <div className="flex justify-between py-2">
              <div className=" opacity-60">All-Time High</div>
              <div className="flex flex-col text-sm">
                <div className = ''>
                  $69,044.77 <span className="text-red-500">-75.6%</span>
                </div>
                <div>Nov 10, 2021</div>
              </div>
            </div>
              <hr className="h-2"/>
            <div className="flex justify-between py-2">
              <div className=" opacity-60">All-Time Low</div>
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
