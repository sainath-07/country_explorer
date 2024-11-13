import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FadeLoader } from "react-spinners";

const CountryDetails = () => {
  const { CountryName } = useParams();
  const [country, setCountry] = useState(null); //State for handling the country Details.

  // Make the Api call for each Country
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${CountryName}`
        );
        console.log("response-->", response.data);
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountryData();
  }, [CountryName]);

  // If country is false then show the loader in the UI
  if (!country) {
    return (
      <div className="text-center flex justify-center items-center gap-8 py-8 ">
        Loading... <FadeLoader color="#7dd980" />{" "}
      </div>
    );
  }

  return (
    <div className="  rounded-lg py-4  flex flex-col bg-[#F6F6F6] items-center justify-center min-h-screen  px-2 ">
      <h2 className="text-xl  L_Mobile:text-2xl  font-raleway font-bold mb-6 text-center text-blue-500">
        Country: {country?.name?.common}
      </h2>
      {/* Country Card Container */}
      <div className="flex p-4 flex-col md:flex-row items-center  bg-[#FFFFFF] rounded-lg">
        <img
          src={country.flags.svg}
          alt={`${country?.name?.common} flag`}
          className="w-64 mt-2 h-40 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
        />

        {/* details  */}
        <div className="text-lg font-raleway">
          <p className="mb-2 font-bold text-2xl">
            <span className="font-bold text-xl">Capital:</span>{" "}
            {country?.capital}
          </p>
          <p className="mb-2 font-sans font-bold text-2xl">
            <span className=" text-xl">Area:</span> {country?.area}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Region:</span> {country?.region}
          </p>
          {country?.subregion && (
            <p className="mb-2">
              <span className="font-semibold">Subregion:</span>{" "}
              {country?.subregion}
            </p>
          )}
          <p className="mb-2">
            <span className="font-semibold">official:</span>{" "}
            {country?.name?.official}
          </p>
          <p className="mb-2">
            <span className="font-semibold">continent :</span>{" "}
            {country?.continents[0]}
          </p>
          <p className="mb-2 font-sans">
            <span className="font-semibold">Population:</span>{" "}
            {country?.population.toLocaleString()}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country?.languages).join(", ")}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Currencies:</span>{" "}
            {Object.values(country?.currencies)
              .map((currency) => currency?.name)
              .join(", ")}
          </p>
          <p className="mb-2">
            <span className="font-semibold">symbol:</span>{" "}
            {Object.values(country?.currencies)
              .map((currency) => currency?.symbol)
              .join(", ")}
          </p>
          <p className="mb-2 font-sans">
            <span className="font-semibold">Timezones:</span>{" "}
            {country.timezones.join(", ")}
          </p>
          <p className="mb-2">
            <span className="font-semibold">startOfWeek:</span>{" "}
            {country?.startOfWeek}
          </p>
        </div>
      </div>

      {/* Navigation button for Maps and Go back option */}
      <div className="mt-8 flex flex-col gap-4 text-center">
        <a
          href={country?.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  bg-blue-500 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
        >
          View on Google Maps
        </a>
        <Link
          to="/"
          className="text-white bg-blue-500 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CountryDetails;
