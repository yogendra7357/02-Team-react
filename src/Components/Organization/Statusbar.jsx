import React from 'react';

const Statusbar = () => {
  return (
    <div className="min-w-80 bg-white rounded-lg shadow-xl ml-9 mr-[35rem]">
      <div className="flex border-l-slate-500 cursor-pointer">
        <div className="border-r  m-4 rounded-lg text-center hover:bg-blue-100 hover:text-blue-900">
          <h2 className="text-blue-800 font-bold">95</h2>
          <p className="text-gray-500 w-28 ">Total</p>
        </div>
        <div className="border-r  m-4 rounded-lg text-center hover:bg-blue-100 hover:text-blue-900">
          <h2 className="text-green-600 font-bold">90</h2>
          <p className="text-gray-500 w-28">Active</p>
        </div>
        <div className="border-r m-4 rounded-lg text-center hover:bg-blue-100 hover:text-blue-900">
          <h2 className="text-red-600 font-bold">02</h2>
          <p className="text-gray-500 w-28 ">On Leave</p>
        </div>
        <div className="border-r m-4  rounded-lg text-center  hover:bg-blue-100 hover:text-blue-900">
          <h2 className="text-orange-600 font-bold">02</h2>
          <p className="text-gray-500 whitespace-no-wrap w-32 ">On Half Day</p>
        </div>
        <div className=" m-4 rounded-lg text-center hover:bg-blue-100 hover:text-blue-900">
          <h2 className="text-black font-bold">01</h2>
          <p className="text-gray-500 w-32">Work From Home</p>
        </div>
      </div>
    </div>
  );
};

export default Statusbar;
