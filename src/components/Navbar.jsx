import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div className="nav hidden md:flex p-4 border-2 border-black-900  justify-between items-center shadow-md">
        <div className="logo lg:max-w-24 lg:min-w-24 max-w-16 min-w-16 lg:mx-16 mx-10 ">
          <img src="/KionX.png" alt="not found" />
        </div>
        <div className="flex sm:gap-12 gap-8  items-center  cursor-pointer">
          <div className="hover:text-blue-700  font-semibold">
            <a href="#">Crypto Taxes</a>
          </div>
          <div className="hover:text-blue-700  font-semibold">
            <a href="#">Free Toolshu </a>
          </div>
          <div className="hover:text-blue-700  font-semibold">
            <a href="#">Resources Center </a>
          </div>
          <div>
            <button className="btn border-2 p-2 lg:px-4 bg-blue-700 rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="nav md:hidden xs:p-4 p-2 border-black-900 flex justify-between items-center shadow-md">
        <div className="logo lg:max-w-24 lg:min-w-24 max-w-16 min-w-16 lg:mx-16 ml-2 xs:mx-10 ">
          <img src="/KionX.png" alt="not found" />
        </div>
        <div className="p-4 ">
          <img
            className=" h-4 w-4 "
            onClick={toggleNavbar}
            src="/icon-menu.svg"
            alt="not found"
          />
        </div>

        {isOpen && (
          <div className="fixed w-screen h-screen ">
            <div  className="h-screen w-[35vw] ">
              
              </div>
            <ul className=" border-2 flex flex-col pl-8 sm:gap-12 gap-4 text-md cursor-pointer fixed w-[75%] h-full top-0 right-0 bg-white z-100 opacity-100 ">
         
              <div className="flex justify-end p-4">
                <img
                  className=" h-4 w-4"
                  onClick={toggleNavbar}
                  src="/icon-menu-close.svg"
                  alt="not found"
                />
              </div>
              <li className="hover:text-blue-700  font-semibold">
                <a href="#">Crypto Taxes</a>
              </li>
              <li className="hover:text-blue-700  font-semibold">
                <a href="#">Free Toolshu </a>
              </li>
              <li className="hover:text-blue-700  font-semibold">
                <a href="#">Resources Center </a>
              </li>
              <div>
                <button className="btn border-2 py-2 px-2 bg-blue-700 text-xs  rounded-lg text-white">
                  Get Started
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
