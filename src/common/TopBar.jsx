import React, { useState } from "react";

const TopBar = (props) => {
  const { handleTab, activeTab, tab } = props;

  return (
    <div className="flex items-center flex-wrap gap-x-5 ">
      {tab.map((item, index) => {
        return (
          <div
            key={item}
            onClick={() => handleTab(item)}
            className={`${
              item === activeTab &&
              "text-primary border border-color  rounded-full  px-4"
            } sm:text-[11px]  text-[10px]  cursor-pointer`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TopBar;
