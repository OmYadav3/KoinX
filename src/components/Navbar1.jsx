import React from 'react'

const Navbar1 = () => {
  return (
    <div>
      <div className="flex gap-8 ">
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Overview</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Fundamentals</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#"> News Insights</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Sentiments</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Team</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Techanicals</a></div>
            <div className="text-xl hover:text-cyan-600 hover:underline"><a href="#">Tokenomics</a></div>
        </div>
        <hr className="mt-4 border-2 w-[56rem]"/>
    </div>
  )
}

export default Navbar1
