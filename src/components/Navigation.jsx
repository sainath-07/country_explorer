import React from "react";
import Header from "./Header";
import CountryList from "./CountryList";

const Navigation = () => {
  return (
    <div className="w-full min-h-screen  bg-[#F6F6F6]">
      <Header />
      <CountryList />
    </div>
  );
};

export default Navigation;
