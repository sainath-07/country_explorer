import React, { useState } from "react";
import worldMap from "../earth.png";

const Header = () => {
  return (
    <>
      <div className=" border-red-400 bg-opacity-70 backdrop-blur-lg bg-[#FFFFFF]  w-full fixed left-0 top-0  text-black h-[75px] flex  justify-between items-center  shadow-md z-20">
        <div className="flex S_Mobile:w-full Tablet:w-[50%]  items-center  gap-2  px-2">
          <img
            className="
             w-12 h-12
            "
            src={worldMap}
            alt="worldMap"
          />
          <span className="text-2xl font-bold font-raleway cursor-pointer   rounded-full ">
            Country Explorer
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
