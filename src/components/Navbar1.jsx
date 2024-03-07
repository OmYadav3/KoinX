import React from 'react'

const Navbar1 = () => {
  return (
    <div className=''>
      <div className=" sm:block hidden md:flex mt-4 gap-8   ">
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#overview">Overview</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#fundamentals">Fundamentals</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#about"> News Insights</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#sentiments">Sentiments</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#team">Team</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#technicals">Technicals</a></div>
            <div className=" w-max text-nowrap hover:text-cyan-600 hover:underline"><a href="#tokenomics">Tokenomics</a></div>
        </div>
        <hr className="xs:mt-4 mt-2  lg:w-[56rem] "/>
    </div>
  )
}

export default Navbar1
