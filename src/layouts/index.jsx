import React, { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (Wcomponent) => {
  return function Component() {
    const [toggle, setToggle] = useState(true);
    // handleToggle
    const handleToggle = () => setToggle(!toggle);

    return (
      <div className="flex h-screen relative overflow-hidden">
        <Sidebar />
        <div
          id="wcomponent"
          className="bg-secondary relative overflow-auto h-full text-sm w-full"
        >
          <Navbar />
          <div className="p-4 h-full">
            <Wcomponent />
          </div>
        </div>
      </div>
    );
  };
};

export default Layout;
