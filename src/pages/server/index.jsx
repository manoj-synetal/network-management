import React, { useState } from "react";
import Overview from "./Overview";
import Layout from "../../layouts";
import TopBar from "../../common/TopBar";
import Graphs from "./Graphs";
import { LuToggleLeft } from "react-icons/lu";
import { BiRefresh } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import Logs from "./Logs";
import Alerts from "./Alerts";
import Neighbours from "./Neighbours";
import VLANs from "./VLANs";
import Ports from "./Ports";

const tabOptions = [
  "Overview",
  "Graphs",
  "Health",
  "Ports",
  "VLANs",
  "Neighbours",
  "Inventory",
  "Logs",
  "Alerts",
  "Latency",
];

const Server = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const handleTab = (value) => setActiveTab(value);

  const Tab = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;

      case "Graphs":
        return <Graphs />;

      case "Logs":
        return <Logs />;

      case "Alerts":
        return <Alerts />;

      case "Neighbours":
        return <Neighbours />;

      case "VLANs":
        return <VLANs />;

      case "Ports":
        return <Ports />;

      default:
        return <Overview />;
    }
  };
  return (
    <div className="pb-1">
      <TopBar handleTab={handleTab} tab={tabOptions} activeTab={activeTab} />
      <div className="pb-3 pt-6 gap-2 border-gray-300 border-b text-xs tracking-wide flex sm:flex-row flex-col justify-between">
        <div>
          <h3 className="font-bold">Cisco IOS 12.2(55)SE8 (IPSERVICESK9)</h3>
          <div className="flex gap-5 text-[11px] py-1">
            <span className="text-secondary">10.20.30.04</span>
            <span className="text-emerald-500">Connected</span>
          </div>
        </div>
        <div className="flex gap-4 text-[10px]">
          <div className="text-primary flex items-center gap-2 uppercase">
            <LuToggleLeft className="text-lg" />
            Firewall
          </div>
          <div className="text-orange-500 flex items-center gap-2 uppercase">
            <BiRefresh className="text-lg" />
            Restart
          </div>
          <div className="text-red-500 flex items-center gap-2 uppercase">
            <BsTrash3 className="" />
            Disconnect
          </div>
        </div>
      </div>

      {Tab()}
    </div>
  );
};

export default Layout(Server);
