import React from 'react'

function Hero() {
  return (
    <div className="bg-blue-100 p-4 pt-14">
    <div className="flex items-center space-x-4">
      <img
        src="./public/img1.jpg"
        alt="Offer"
        className="w-1/3 rounded-lg cursor-pointer "
      />
      <div className="w-1/3 text-center">
        <h2 className="text-xl font-bold">Starting ₹99</h2>
        <img className='cursor-pointer' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Budget/BAU/New/HEADER-pc.jpg" alt="" />
        <p>Grab your home essentials</p>
      </div>
      <div className="w-1/3 text-center">
        <img className='cursor-pointer' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Hero