import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [countryList, setCoutryList] = useState([]);
  useEffect(() => {
    fetchAllCoutries();
  }, []);

  const fetchAllCoutries = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    console.log("response-->", response.data);
  };
  return <div></div>;
};

export default ProductsList;
