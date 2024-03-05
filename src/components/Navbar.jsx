import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav p-4 border-2 border-black-900 flex justify-between items-center shadow-md">
        <div className='logo max-w-24 min-w-24 mx-20 '>
            <img src="/KionX.png" alt="not found" />
        </div>
        <div className='flex gap-12 items-center mx-10 cursor-pointer'>
            <div className='hover:text-blue-700  font-semibold' ><a href="#">Crypto Taxes</a></div> 
            <div className='hover:text-blue-700  font-semibold' ><a href="#">Free Toolshu </a></div> 
            <div className='hover:text-blue-700  font-semibold' ><a href="#">Resources Center </a></div> 
            <div>
                <button className='btn border-2 p-2 px-4 bg-blue-700 rounded-lg text-white'>
                    Get Started
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
