import React from "react";
import { BiRefresh } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { LuToggleLeft } from "react-icons/lu";
import { FaDharmachakra } from "react-icons/fa";
import { HiOutlineServer } from "react-icons/hi";
import { BsPlug, BsThreeDots, BsTrash3 } from "react-icons/bs";
import { MdMemory, MdOutlineCalendarMonth } from "react-icons/md";

const Overview = () => {
  return (
    <div>
      {/* Cards */}
      <div className="grid my-5 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Memory */}
        <div className="p-3 grid grid-cols-2 gap-2 items-center rounded shadow bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-200 text-lg w-9 h-9 flex justify-center items-center  rounded-full">
              <HiOutlineServer />
            </div>
            <div className="text-[10px]">
              <div className="font-semibold">Memory</div>
              <p className="text-secondary">Used : 100M</p>
            </div>
          </div>
          <div className="ml-auto w-full">
            <div className="flex justify-between text-[10px] pb-0.5">
              <div className="">Total : 550M</div>
              <div className="font-bold">52%</div>
            </div>
            <div className="w-full bg-emerald-200 rounded-full">
              <div className="w-3/5 rounded-full bg-emerald-500 py-1"></div>
            </div>
          </div>
        </div>
        {/* Processor */}
        <div className="p-3 grid grid-cols-2 gap-2 items-center rounded shadow bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-primary-light text-lg w-9 h-9 flex justify-center items-center  rounded-full">
              <MdMemory />
            </div>
            <div className="text-[10px]">
              <div className="font-semibold">Processor</div>
              <p className="text-secondary">Used : 100M</p>
            </div>
          </div>
          <div className="ml-auto w-full">
            <div className="flex justify-between text-[10px] pb-0.5">
              <div className="">Total : 550M</div>
              <div className="font-bold">52%</div>
            </div>
            <div className="w-full bg-primary-light rounded-full">
              <div className="w-3/5 rounded-full bg-primary py-1"></div>
            </div>
          </div>
        </div>
        {/* Storage */}
        <div className="p-3 grid grid-cols-2 gap-2 items-center rounded shadow bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 text-lg w-9 h-9 flex justify-center items-center  rounded-full">
              <GrStorage />
            </div>
            <div className="text-[10px]">
              <div className="font-semibold">Storage</div>
              <p className="text-secondary">Used : 100M</p>
            </div>
          </div>
          <div className="ml-auto w-full">
            <div className="flex justify-between text-[10px] pb-0.5">
              <div className="">Total : 550M</div>
              <div className="font-bold">52%</div>
            </div>
            <div className="w-full bg-orange-100 rounded-full">
              <div className="w-3/5 rounded-full bg-orange-300 py-1"></div>
            </div>
          </div>
        </div>

        {/* Temprature */}
        <div className="p-3 flex  gap-3 rounded shadow bg-white">
          <div className="bg-primary-light text-lg w-10 h-9 flex justify-center items-center  rounded-full">
            <BsPlug />
          </div>
          <div className="text-[10px] w-full">
            <div className="font-semibold">Temprature</div>

            <div className=" flex w-full justify-between">
              <div className="text-secondary">Backplane</div>
              <div className="font-semibold"> 24c</div>
            </div>
            <div className=" flex w-full justify-between">
              <div className="text-secondary">CPU</div>
              <div className="font-semibold"> 44c</div>
            </div>
          </div>
        </div>

        {/* State */}
        <div className="p-3 flex  gap-3 rounded shadow bg-white">
          <div className="bg-orange-200 text-lg w-10 h-9 flex justify-center items-center  rounded-full">
            <FaDharmachakra />
          </div>
          <div className="text-[10px] w-full">
            <div className="font-semibold">State</div>

            <div className=" flex w-full justify-between">
              <div className="text-secondary">Backplane</div>
              <div className="font-semibold"> Normal</div>
            </div>
            <div className=" flex w-full justify-between">
              <div className="text-secondary">CPU</div>
              <div className="font-semibold"> Normal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Router Details */}
      <div className="bg-white p-3 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Router Details</h3>
          <div>
            <BsThreeDots className=" cursor-pointer text-lg" />
          </div>
        </div>

        {Array(7)
          .fill()
          .map((item) => {
            return (
              <div className="py-3 grid items-center border-b  grid-cols-2 text-xs">
                <div className="flex items-center  gap-2">
                  <p className="w-2 h-2 bg-primary rounded-full"></p>
                  <h4>System information</h4>
                </div>
                <p className="text-secondary">vg_gurgaon.konverge.co.in</p>
              </div>
            );
          })}
      </div>

      {/* Recent Alerts */}
      <div className="bg-white p-3 my-5 text-sm rounded shadow">
        <div className="flex items-center mb-5 justify-between">
          <h3 className="font-bold">Recent Alerts</h3>
          <div>
            <BsThreeDots className=" cursor-pointer text-lg" />
          </div>
        </div>

        {Array(4)
          .fill()
          .map((item) => {
            return (
              <div className="py-3 flex gap-3  items-center border-b text-xs">
                <p className="text-secondary text-xl">
                  <MdOutlineCalendarMonth />
                </p>
                <div className="flex flex-col text-[11px]">
                  <div className="font-bold">2023-06-27 18:35:04</div>
                  <p className="text-secondary">
                    Component: ntp(4). Attribute: peerref, was added with value:
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Overview;
