import axios from "axios";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { FadeLoader } from "react-spinners";
import Pagination from "./Pagination";

const ProductsList = () => {
  const [countryList, setCoutryList] = useState([]);
  const [perPage, setPerPage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isContinent, setContinent] = useState("All");

  const [search, setSearch] = useState("");

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const [pageNo, setPageNo] = useState(1);

  //continent names
  const continentData = [
    { id: 1, text: "All", value: "All" },
    { id: 2, text: "Asia", value: "Asia" },
    { id: 3, text: "Africa", value: "Africa" },
    { id: 4, text: "Europe", value: "Europe" },
    { id: 5, text: "North America", value: "North America" },
    { id: 6, text: "South America", value: "South America" },
    { id: 7, text: "Australia", value: "Oceania" },
    { id: 8, text: "Antarctica", value: "Antarctica" },
  ];

  useEffect(() => {
    fetchAllCoutries();

    // Handle scroll events
    const handleScroll = () => {
      // Show button when scrolled down 200px or more
      setShowScrollTopButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Api call
  const fetchAllCoutries = async () => {
    setIsLoading(true);
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        setIsLoading(false);
        // console.log(response?.data);
        setCoutryList(response?.data);
        setPerPage(response?.data.slice(pageNo - 1, pageNo * 25));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    let { value } = e?.target;
    setSearch(value);
  };

  // Country list Filter Logic
  const filteredCountries =
    isContinent === "All" && search === ""
      ? perPage
      : countryList?.filter(
          (country) =>
            search
              ? country?.name?.common
                  .toLowerCase()
                  .includes(search.toLowerCase()) || //search By Country.
                (country?.capital &&
                  country?.capital?.find((capital) =>
                    capital?.toLowerCase()?.includes(search?.toLowerCase())
                  )) //searc by Capital.
              : country?.continents &&
                country?.continents?.find(
                  (continent) => continent === isContinent
                ) // filter by Continent
        );

  // pagaination slice
  const handlePagination = (pageNumber) => {
    setContinent("All");
    setSearch("");

    setPageNo(pageNumber);
    setPerPage(countryList.slice(pageNumber * 25 - 25, pageNumber * 25));
  };

  console.log("isContinent-->", isContinent);

  return (
    <div className="pt-20 w-full S_Mobile:px-4 Laptop:px-8 flex flex-col gap-8">
      {/* filter by continent and search the countries */}

      <div className="flex justify-between flex-wrap gap-3 mt-4 ">
        {/* Filter by continents */}

        <div className="flex flex-wrap gap-2   Tablet:px-4 Laptop:px-0    items-center ">
          {continentData.map(({ text, value, id }) => (
            <span
              key={id}
              style={{
                borderRadius: "100px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                fontFamily: "Raleway",
                fontWeight: 600,
                border: "1px solid rgba(2, 6, 12, 0.15)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                backgroundColor: isContinent === value ? "#306BEA" : "#FFFFFF",
                color: isContinent === value ? "#FFFFFF" : "#306BEA",
                transition: "all 0.2s ease-in-out",
              }}
              onClick={() => {
                setContinent(value);
                setSearch("");
              }}
            >
              {text}
            </span>
          ))}
        </div>

        {/* search bar */}
        <div className="S_Mobile:w-full  Laptop:w-auto   flex justify-center items-center ">
          <input
            type="text"
            className="border-2 outline-none hover:shadow-[1px_1px_5px_2px_#fac031] focus:shadow-[1px_1px_5px_2px_#fac031]  rounded-full pl-3 px-2 py-2 S_Mobile:w-full  L_Mobile:w-[400px] font-raleway font-bold"
            placeholder={`🔍 Search by "Countries" OR "Capital"`}
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Countries List */}
      <div className="flex flex-wrap gap-5 justify-center">
        {isLoading ? (
          new Array(25).fill(null).map((_, index) => (
            <div
              key={index} // Unique key for each loading item
              className="flex flex-col w-[250px] gap-2 pb-2 rounded-lg cursor-pointer shadow-lg transition-all duration-800 hover:scale-105 animate-pulse bg-gray-200"
            >
              <div className="w-full h-[200px] bg-gray-300 rounded-md"></div>
              <span className="w-3/4 ml-2 h-4 bg-gray-300 rounded-md "></span>
              <span className="w-1/2 ml-2 h-4 bg-gray-300 rounded-md "></span>
            </div>
          ))
        ) : Array.isArray(filteredCountries) && filteredCountries.length > 0 ? (
          filteredCountries.map((element, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col w-[250px] gap-2 pb-2 rounded-lg cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  src={element?.flags?.svg}
                  alt=""
                  className="w-full h-[200px] object-cover"
                />
                <span className="pl-2 font-raleway font-bold text-lg">
                  {element &&
                    element.continents.map((ele, index) => (
                      <React.Fragment key={index}>
                        continent : {ele}
                      </React.Fragment>
                    ))}
                </span>
                <span className="pl-2 font-raleway font-semibold text-md">
                  Country: {element?.name?.common}
                </span>
                {element?.subregion && (
                  <span className="pl-2 font-raleway font-semibold text-md">
                    Sub region : {element?.subregion}
                  </span>
                )}
                {/* <span className="pl-2 font-raleway font-semibold text-md">
                  id : {index + 1 + (pageNo - 1) * 25}
                </span> */}
              </div>
            </React.Fragment>
          ))
        ) : (
          <div className=" flex items-center gap-4 text-gray-500 text-lg font-raleway font-semibold ">
            <span>No results found</span>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 pl-1 left-0 L_Mobile:left-4 bg-black rounded-[150px]  text-white w-[35px] h-[35px] "
        >
          <ArrowUp />
        </button>
      )}

      {/* pagination */}
      <Pagination
        countryList={countryList}
        handlePagination={handlePagination}
        pageNo={pageNo}
      />
    </div>
  );
};

export default ProductsList;
