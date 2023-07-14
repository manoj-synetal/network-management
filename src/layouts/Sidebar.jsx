import { RxDashboard } from "react-icons/rx";
import { HiOutlineServer } from "react-icons/hi";
import React, { Fragment, useState } from "react";
import { LuNetwork, LuSettings } from "react-icons/lu";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { BiDotsVerticalRounded, BiEnvelope, BiGlobe } from "react-icons/bi";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  // Handles
  const handleActive = (item) => {
    navigate(item.path);
    item.child.length !== 0 && setActive(item.name === active ? "" : item.name);
  };

  // NavLinks
  const navLinks = [
    { name: "Dashboard", icon: <RxDashboard />, path: "/dashboard" },
    {
      name: "Server",
      icon: <HiOutlineServer />,
      path: "/server",
      child: [
        { name: "Web Server" },
        { name: "Virtual Machine" },
        { name: "Proxy Server" },
      ],
    },
    {
      name: "Network",
      icon: <LuNetwork />,
      path: "/network",
      child: [
        { name: "VPN" },
        { name: "Switch" },
        { name: "Router" },
        { name: "Firewall" },
        { name: "Wireless" },
        { name: "Load Balancer" },
        { name: "WAN Accelerator" },
        { name: "Printor" },
        { name: "UPS" },
        { name: "Storage Devices" },
      ],
    },
    { name: "Cloud", icon: <AiOutlineCloudDownload />, path: "", child: [] },
    { name: "Setting", icon: <LuSettings />, path: "", child: [] },
  ];

  return (
    <div className="flex">
      {/* Main Links */}
      <div className="w-24 h-full bg-white shadow-lg border-r">
        <div className="flex py-4 flex-col font-medium gap-1 items-center text-[10px] tracking-wide text-center">
          <BiGlobe className="text-4xl text-primary" />
          <h4>Network24x7</h4>
        </div>
        <div
          id="navLinks"
          className="flex  overflow-y-auto items-center gap-5 my-9 flex-col"
        >
          {navLinks.map((item) => {
            return (
              <Fragment key={item.name}>
                <div
                  onClick={() => handleActive(item)}
                  type="button"
                  className={` text-lg p-3 rounded-full cursor-pointer ${
                    active === item.name || item.path === pathname
                      ? "text-primary bg-primary-light"
                      : "text-dark"
                  }`}
                >
                  {item.icon}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Sub Links */}
      {navLinks.map((item) => {
        return (
          item.name === active &&
          item?.child.length !== 0 && (
            <div
              key={item.name}
              id="subItem"
              className=" overflow-y-auto bg-white text-sm py-4 top-0 left-24 w-56 h-full"
            >
              <h5 className="font-medium px-4">{active}</h5>
              <div className="flex my-5 justify-between mx-4 items-center border-b pt-5 pb-2.5">
                <span className="text-dark text-xs font-medium">
                  {active}{" "}
                  <span className="p-1 ml-1.5 bg-primary-light text-xs text-primary rounded-full">
                    {item?.child.length}
                  </span>
                </span>
                <span>
                  <BiDotsVerticalRounded />
                </span>
              </div>
              <section className="px-2 grid gap-2">
                {item?.child?.map((subItem, index) => {
                  return (
                    <div
                      key={subItem.name}
                      className={`flex cursor-pointer tracking-wide ${
                        index === 1 ? "bg-primary-light" : ""
                      }  rounded-full justify-between p-1 px-4 items-center`}
                    >
                      <div className="text-[10px] grid">
                        <span
                          className={`${
                            index === 1 ? "text-primary" : "text-dark "
                          } font-semibold`}
                        >
                          {subItem.name}
                        </span>
                        <span className="text-secondary">45.77.103.173</span>
                      </div>
                      <BiEnvelope className="text-primary text-lg" />
                    </div>
                  );
                })}
              </section>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Sidebar;
