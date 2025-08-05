import React from "react";

function TableComponent() {
  const transactions = [
    {
      name: "Adobe After Effect",
      date: "Sat, 20 Apr 2020",
      amount: "$80.09",
      status: "Deposit",
    },
    {
      name: "McDonald's",
      date: "Fri, 19 Apr 2020",
      amount: "$7.03",
      status: "Deposit",
    },
    {
      name: "Levi's Store",
      date: "Thu, 18 Apr 2020",
      amount: "$30.09",
      status: "Deposit",
    },
  ];
  return (
    <div className="flex flex-col gap-[35px] bg-[#1D1D41] p-[40px] rounded-[20px]">
      <div className="flex flex-row text-center justify-between">
        <h2 className="text-white text-[20px] font-semibold ">Transaction</h2>
        <input
          type="text"
          placeholder="Search for anything...."
          className="w-[400px] bg-[#27264E] placeholder:text-[#AEABD8] py-[16px] rounded-[10px] px-[22px] text-white"
        />
      </div>

      <table className="w-full table-auto  border-separate border-spacing-y-[36px]">
        <thead>
          <tr className="text-[#AEABD8] text-[12px]">
            <th className="text-start px-4">Name</th>
            <th className="text-start px-4">Date</th>
            <th className="text-start px-4">Amount</th>
            <th className="text-start px-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className=" hover:bg-[#2A2955] transition-colors">
              <td className="py-3 px-4 text-white">{tx.name}</td>
              <td className="py-3 px-4 text-white">{tx.date}</td>
              <td className="py-3 px-4 text-white">{tx.amount}</td>
              <td className="py-3 px-4 text-white">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
