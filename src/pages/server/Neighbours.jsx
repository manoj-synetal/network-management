import React from "react";
const Neighbours = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Neighbours</h3>
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
                    Local Port
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Remote Device
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Remote Port{" "}
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Protocol
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
                          <h4 className="font-semibold">FastEthernet1/0/14</h4>
                          <span className="text-secondary">
                            COnference_Phone
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">
                          <h4 className="font-semibold">
                            KON_SWITCH_3.google.com
                          </h4>
                          <span className="text-secondary">
                            cisco WS-C3750-48P
                          </span>
                        </td>
                        <td className="px-4 py-3">FastEthernet1/0/14</td>
                        <td className="px-4 py-3">CDP</td>
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

export default Neighbours;
