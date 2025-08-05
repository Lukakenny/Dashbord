import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

function CardComponent() {
  const Card = ({ title, value, pillText, trend }) => {
    return (
      <div className="flex flex-row gap-[30px] rounded-[20px] bg-[#1D1D41] p-[40px] ">
        <div
          className={`flex items-center p-[15px] h-[50px] w-[50px] rounded-[10px] ${
            title === "Total Income" ? "bg-[#64CFF6]" : "bg-[#6359E9]"
          }`}
        >
          {title === "Total Income" ? (
            <GoArrowDownLeft size={20} className="text-white" />
          ) : (
            <GoArrowUpRight size={20} className="text-white" />
          )}
        </div>

        <div className="flex flex-row items-end gap-[33px]">
          <div className="flex flex-col">
            <p className="text-[#8C89B4] text-[16px]">{title}</p>
            <p className="text-white text-[24px] font-semibold">${value}</p>
          </div>

          <div
            className={` h-[20px] text-xs flex items-center mb-[5px] px-[10px] py-[4px] rounded-full ${
              trend === "up"
                ? "bg-[rgba(2,177,90,0.15)] text-[#02B15A]"
                : "bg-[rgba(235,0,27,0.15)] text-[#E41414]"
            }`}
          >
            {pillText}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-row gap-[26px]">
      <Card title="Total Income" value="632.000" trend="up" pillText="+1.29%" />

      <Card
        title="Total Outcome"
        value="632.000"
        trend="down"
        pillText="-1.29%"
      />
    </div>
  );
}

export default CardComponent;
