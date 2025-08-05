import React from "react";
import { FiSearch } from "react-icons/fi";

function TopBarComponent() {
  return (
    <div className="flex flex-row justify-between mb-[70px]">
      <div>
        <p className="text-white text-[24px] font-semibold ">
          Welcome Back, Ali
        </p>
        <p className="text-[16px] text-[#A6A6A6]">
          Here what happening with your store today.
        </p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search for anything...."
          className="w-[400px] bg-[#1D1D41] placeholder:text-[#AEABD8] py-[16px] rounded-[10px] px-[22px] text-white"
        />
        <FiSearch size={19} className="absolute top-[30%] right-1 text-white" />
      </div>
    </div>
  );
}

export default TopBarComponent;
