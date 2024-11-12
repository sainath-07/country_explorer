import React, { useState } from "react";
import worldMap from "../earth.png";
import { SearchCheck } from "lucide-react";
import Search from "../Portol/Search";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setSearch] = useState(false);
  return (
    <>
      <div className=" border-red-400 bg-opacity-70 backdrop-blur-lg bg-[#FFFFFF]  w-screen fixed left-0 top-0  text-black h-[75px] flex  justify-between items-center  shadow-md  ">
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

        <div className="Tablet:w-[50%]  flex justify-center ">
          <SearchCheck
            className="text-[#222]  S_Mobile:mr-4 Tablet:hidden Laptop:hidden L_Laptop:hidden"
            size={35}
            strokeWidth={2}
            onClick={() => setSearch(true)}
          />

          <p
            onClick={() => setSearch(true)}
            className="hidden Tablet:flex items-center w-[65%] h-[45px] border-2  rounded-full border-gray-300 pl-3 p-2 font-raleway  hover:shadow-[1px_1px_5px_2px_#fac031] font-semibold cursor-pointer"
          >{`🔍 Search By "Countries..."`}</p>
        </div>
      </div>

      {isSearch && <Search setSearch={setSearch} />}
    </>
  );
};

export default Header;
