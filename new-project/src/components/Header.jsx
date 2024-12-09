import React from 'react';

function Header() {
  return (
    <div>
      <header className="bg-gray-800 text-white fixed w-full z-10">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="mx-2 w-20">
            <img src="./public/img2.png" alt="" />
          </div>
          <div className="flex">
            <img className="w-6" src="./public/img4.png" alt="" />
            <a className="font-bold" href="#">
              Update Location
            </a>
          </div>
          <div className="flex w-full max-w-lg ">
            <input
              type="text"
              className="p-2 rounded-l-lg w-full "
              placeholder="Search Amazon.in"
            />
            <img className="rounded-r-lg cursor-pointer" src="./public/img5.jpg" alt="" />
          </div>
          <div className="flex space-x-4 relative">
            <div className="relative group">
              <a href="#" className="hover:underline">
                EN
              </a>
              <div className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg mt-2 right-0 py-2 w-28">
                <a href="#" className="px-4 py-2 hover:bg-gray-200">
                  English
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-200">
                  हिंदी
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-200">
                  தமிழ்
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-200">
                  Español
                </a>
              </div>
            </div>
            <a href="#" className="hover:underline">
              Account & Lists
            </a>
            <a href="#" className="hover:underline">
              Returns & Orders
            </a>
            <a href="#" className="flex hover:underline">
              <img className="w-8" src="./public/img3.png" alt="" />
              Cart
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;