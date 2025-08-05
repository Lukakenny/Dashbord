import logo from "../../assets/logo.png";
import AccountInfoComponent from "./AccountInfoComponent";
import MenuComponent from "./MenuComponent";

function SideBarComponent() {
  return (
    <div className="bg-[#1D1D41] h-screen  w-[20%] px-[28px] py-[57px] ">
      <img src={logo} alt="logo" className="mb-[60px]" />

      <MenuComponent />

      <AccountInfoComponent />
    </div>
  );
}

export default SideBarComponent;
