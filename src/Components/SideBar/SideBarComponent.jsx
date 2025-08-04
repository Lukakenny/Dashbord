import logo from "../../assets/logo.png";
import MenuComponent from "./MenuComponent";

function SideBarComponent() {
  return (
    <div className="bg-[#1D1D41] h-[200vh] w-[20%] px-[28px] py-[57px]">
      <img src={logo} alt="logo" className="mb-[60px]" />

      <div>
        <MenuComponent />
      </div>
    </div>
  );
}

export default SideBarComponent;
