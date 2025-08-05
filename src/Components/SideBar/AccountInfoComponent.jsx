import man from "../../assets/Mask group.png";
import { FaArrowDown } from "react-icons/fa";

function AccountInfoComponent() {
  return (
    <div className="flex flex-row mt-[50px] items-star relative">
      <img src={man} alt="man" />

      <div className="flex flex-col">
        <p className="text-white font-bold text-[20px]">Ali Riaz</p>
        <p className="text-white text-[16px]">Web Developer</p>
      </div>

      <div className="absolute right-0.5 bottom-6">
        <FaArrowDown className="text-white" />
      </div>
    </div>
  );
}

export default AccountInfoComponent;
