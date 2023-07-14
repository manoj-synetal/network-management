import React from "react";
const Logs = () => {
  return (
    <div>
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Logs</h3>
        </div>

        {/* Table Content */}
        <div className="border rounded-xl">
          <div className="rounded-t-xl flex p-4 bg-gray-200">
            <div className="ml-auto flex gap-3">
              <select className="border text-xs px-4 py-1.5 appearance-none border-gray-300 rounded outline-none">
                <option value="">All types</option>
                <option value="">alert</option>
                <option value="">All types</option>
                <option value="">All types</option>
              </select>
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
                    Type
                  </th>
                  <th className="px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Host Name
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    Message
                  </th>
                  <th className=" px-4 py-2.5 title-font tracking-wider font-medium text-gray-900">
                    User
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(20)
                  .fill()
                  .map((item, index) => {
                    return (
                      <tr className={`${index % 2 !== 0 && "bg-gray-100"}`}>
                        <td className="px-4 py-3">2023-06-30 04:07:05</td>
                        <td className="px-4 py-3">alert</td>
                        <td className="px-4 py-3">192.168.11.254</td>
                        <td className="px-4 py-3">
                          Issued warning alert for rule 'Port status up/down' to
                          transport 'mail'
                        </td>
                        <td className="px-4 py-3">System</td>
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

export default Logs;
