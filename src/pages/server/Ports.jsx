import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Ports = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Ports</h3>
        </div>

        {/* Table Content */}
        <div className="border rounded-xl">
          <div className="rounded-t-xl flex p-4 bg-gray-200">
            <div className="ml-auto">
              <input
                type="search"
                className="border text-xs px-4 py-1.5 border-gray-300 rounded outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className=" w-full rounded-b-xl mx-auto text-xs overflow-auto">
            <table className="table-auto w-full text-left whitespace-nowrap">
              <thead className="bg-gray-200 text-xs">
                <tr>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Port
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Port Group
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Traffic
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Speed
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Media
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Mac address
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill()
                  .map((item, index) => {
                    return (
                      <tr className={`${index % 2 !== 0 && "bg-gray-100"}`}>
                        <td className="px-4 py-3 text-[11px]">
                          <h4 className="font-semibold">GigabitEthernet0/0</h4>
                          <span className="text-secondary">192.168.11.2</span>
                        </td>
                        <td className="px-4 py-3">Default</td>
                        <td className="px-4 py-2 w-16 grid items-center gap-1.5 text-[9px]">
                          <div className="bg-emerald-100 flex items-center gap-1 text-emerald-500 rounded-full py-0.5 px-3 text-center">
                            <BsArrowLeft /> 18.44 kbps
                          </div>
                          <div className="bg-primary-light flex items-center gap-1 text-primary rounded-full py-0.5 px-3 text-center">
                            <BsArrowRight /> 1.22 kbps
                          </div>
                          <div className="bg-red-100 flex items-center gap-1 text-red-500 rounded-full py-0.5 px-3 text-center">
                            <BsArrowLeft /> 4 pps
                          </div>
                          <div className="bg-orange-100 flex items-center gap-1 text-orange-500 rounded-full py-0.5 px-3 text-center">
                            <BsArrowRight /> 1 pps
                          </div>
                        </td>
                        <td className="px-4 py-3">1 Gbps</td>

                        <td className="px-4 py-3">Virtual Int</td>
                        <td className="px-4 py-3">00:22:0c:05:a1 MTU 1500</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ports;
