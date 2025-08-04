import { MdOutlineDashboard } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

function MenuComponent() {
  return (
    <div className="pb-[40px] border-b-1 border-[#4B4B99]">
      <ul className="flex flex-col gap-[35px]">
        <li className="flex felx-col gap-[14px] items-center hover:bg-[#6359E9] hover:py-[17px] hover:rounded-[10px] hover:px-[15px]">
          <MdOutlineDashboard size={24} className="text-white" />
          <p className="text-[16px] text-white">Dashboard</p>
        </li>
        <li className="flex felx-col gap-[14px] items-center hover:bg-[#6359E9] hover:py-[17px] hover:rounded-[10px] hover:px-[15px]">
          <IoAnalyticsOutline size={24} className="text-white" />
          <p className="text-[16px] text-white">Analytics</p>
        </li>
        <li className="flex felx-col gap-[14px] items-center hover:bg-[#6359E9] hover:py-[17px] hover:rounded-[10px] hover:px-[15px]">
          <FaWallet size={24} className="text-white" />
          <p className="text-[16px] text-white">Wallet</p>
        </li>
        <li className="flex felx-col gap-[14px] items-center hover:bg-[#6359E9] hover:py-[17px] hover:rounded-[10px] hover:px-[15px]">
          <LuUserRound size={24} className="text-white" />
          <p className="text-[16px] text-white">Accounts</p>
        </li>
        <li className="flex felx-col gap-[14px] items-center hover:bg-[#6359E9] hover:py-[17px] hover:rounded-[10px] hover:px-[15px]">
          <CiSettings size={24} className="text-white" />
          <p className="text-[16px] text-white">Settings</p>
        </li>
      </ul>
    </div>
  );
}

export default MenuComponent;
