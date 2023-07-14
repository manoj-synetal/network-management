import React from "react";
const VLANs = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">VLANs</h3>
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
                    VLAN Number
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    VLAN Name
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Ports
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill()
                  .map((item, index) => {
                    return (
                      <tr className={`${index % 2 !== 0 && "bg-gray-100"}`}>
                        <td className="px-4 py-3">1</td>
                        <td className="px-4 py-3">Default</td>
                        <td className="px-4 py-3">
                          Fa1/0/1 (U), Fa1/0/10 (U), Fa1/0/11 (U), Fa1/0/12 (U),
                          Fa1/0/13 (U), Fa1/0/14 (U), Fa1/0/16 (U), Fa1/0/17
                          (U), Fa1/0/19 (U), Fa1/0/21 (U), Fa1/0/22 (U),
                          Fa1/0/23 (U), Fa1/0/24 (U), Fa1/0/4 (U), Fa1/0/7 (U),
                          Fa1/0/8 (U), Fa1/0/9 (U), Gi1/0/1 (U)
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

export default VLANs;
