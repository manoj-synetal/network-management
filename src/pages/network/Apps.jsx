import React from "react";

const Apps = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Apps</h3>
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
                    Peer
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Stratum
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Peer Reference
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill()
                  .map((item, index) => {
                    return (
                      <tr className={`${index % 2 !== 0 && "bg-gray-100"}`}>
                        <td className="px-4 py-3">127.127.1.1:123</td>
                        <td className="px-4 py-3">1</td>
                        <td className="px-4 py-3">text</td>
                        <td className="px-4 py-3">ok</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* NTP Stratum */}
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">NTP Stratum</h3>
        </div>
      </div>

      {/* Offset */}
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Offset</h3>
        </div>
      </div>

      {/* Delay */}
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Delay</h3>
        </div>
      </div>

      {/* Dispersion */}
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Dispersion</h3>
        </div>
      </div>
    </div>
  );
};

export default Apps;
