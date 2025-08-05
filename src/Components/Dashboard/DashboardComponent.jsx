import CardComponent from "./CardComponent";
import TopBarComponent from "./TopBarComponent";

function DashboardComponent() {
  return (
    <div className="bg-[#141332] w-[80%] px-[26px] pt-[33px] ">
      <TopBarComponent />

      <div className="flex flex-row gap-[26px] ">
        <div>
          <CardComponent />
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default DashboardComponent;
