import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

function BarCharComponent() {
  const data = [
    { month: "Jan", income: "32000", outcome: "25000" },
    { month: "Feb", income: "35000", outcome: "27000" },
    { month: "Mar", income: "28000", outcome: "22000" },
    { month: "Apr", income: "33000", outcome: "26000" },
    { month: "May", income: "40000", outcome: "36000" },
    { month: "Jun", income: "30000", outcome: "27000" },
    { month: "Jul", income: "25000", outcome: "23000" },
    { month: "Aug", income: "27000", outcome: "24000" },
  ];
  return (
    <div className="flex flex-col gap-[45px] p-[40px] rounded-[20px] bg-[#1D1D41]">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-[24px] font-semibold">Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#6359E9]"></span>
            <span className="text-sm text-white">Income</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#64CFF6]"></span>
            <span className="text-sm text-white">Outcome</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8} barCategoryGap="20%" barSize="1%">
          <Bar dataKey="outcome" fill="#64CFF6" />
          <Bar dataKey="income" fill="#6359E9" />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2E2E4D"
            vertical={false}
            horizontal={true}
          />
          <XAxis dataKey="month" stroke="#8C89B4" />
          <YAxis
            domain={[0, 50000]}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            tickFormatter={(value) => `${value / 1000}k`}
            stroke="#8C89B4"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2E2E4D",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
            }}
            cursor={{ fill: "transparent" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharComponent;
