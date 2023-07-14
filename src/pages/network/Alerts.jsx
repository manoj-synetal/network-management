import React from "react";
import { AiOutlineEye } from "react-icons/ai";
const Alerts = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Alerts</h3>
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
                    Timestamp
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Rule
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Host Name
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Location
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    ACK
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Notes
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill()
                  .map((item, index) => {
                    return (
                      <tr className={`${index % 2 !== 0 && "bg-gray-100"}`}>
                        <td className="px-4 py-3">2023-06-30 04:07:05</td>
                        <td className="px-4 py-3">Port status up/down</td>
                        <td className="px-4 py-3">192.168.11.254</td>
                        <td className="px-4 py-3">
                          402, Shekhar central, Indore, M.P. India
                        </td>
                        <td className="px-4 py-3 text-primary text-[10px]">
                          <span className="hover:underline flex items-center  gap-1 cursor-pointer">
                            {" "}
                            <AiOutlineEye className="text-base" /> View More
                          </span>
                        </td>
                        <td className="px-4 py-3 text-primary text-[10px]">
                          <span className="hover:underline flex items-center  gap-1 cursor-pointer">
                            {" "}
                            <AiOutlineEye className="text-base" /> View More
                          </span>
                        </td>
                        <td className="px-4 py-3 text-primary text-[10px]">
                          <span className="hover:underline flex items-center  gap-1 cursor-pointer">
                            {" "}
                            <AiOutlineEye className="text-base" /> View More
                          </span>
                        </td>
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

export default Alerts;
