import BarCharComponent from "./BarCharComponent";
import CardComponent from "./CardComponent";
import TableComponent from "./TableComponent";

import TopBarComponent from "./TopBarComponent";

function DashboardComponent() {
  return (
    <div className="bg-[#141332] w-[80%] px-[26px] pt-[33px] ">
      <TopBarComponent />

      <div className="flex flex-row gap-[26px] ">
        <div className="flex flex-col gap-[26px]">
          <CardComponent />
          <BarCharComponent />
          <TableComponent />
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default DashboardComponent;
