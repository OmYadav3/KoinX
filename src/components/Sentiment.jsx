import React from "react";

const Sentiment = () => {
  return (
    <div>
      <div className="main w-[55rem] border-2 p-4    rounded-lg">
        <div className="section-A font-semibold text-2xl opacity-70">Sentiment</div>
        <div className="section-B">
          <div className="text-xl my-4 font-semibold opacity-70">Key Events</div>
          <div className="colorboxes flex gap-4 ">
            <div className="blue w-[50%] bg-blue-50 rounded-lg p-4">
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
            <div className="green w-[50%] flex gap-4 bg-green-50 rounded-lg p-4">
              <div className="flex gap-4 justify-center ">
                <div className="logo min-w-16 max-w-16">
                  <img src="/logo-5.png" alt="not found" />
                </div>
              </div>
              <div className="details">
                <div className="title font-[600] py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>
                <div className="desc text-sm p-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  eligendi earum illum fugit quod aspernatur, aliquid dolore
                  eius officia alias quisquam! Accusamus, exercitationem.
                  Nostrum optio explicabo!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-C  my-4">
        <div className="text-xl my-4 font-semibold opacity-70">Analyst Estimates</div>
        <div className="flex items-center">
        <div className="percentage text-4xl  h-[10rem] w-[10rem] font-semibold bg-green-100 text-green-600 px-12 py-14 rounded-[50%] mx-6 my-6 ">
            76%
        </div>
        <div className="category flex flex-col  justify-around gap-6">
            <div className="flex gap-6 items-center  ">
                <div className="opacity-70">Buy</div>
                <div className="h-2 rounded-lg w-[24rem] bg-gradient-to-r from-green-500  to-green-500"></div>
                <div>76%</div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="opacity-70">Hold</div>
                <div className="h-2 rounded-lg w-[4rem] bg-gradient-to-r from-gray-400 to-gray-400"></div>
                <div>8%</div>
            </div>
            <div className="flex gap-7 items-center ">
                <div className="opacity-70">Sell</div>
                <div className="h-2 rounded-lg w-[8rem] bg-gradient-to-r from-red-500  to-red-500"></div>
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
