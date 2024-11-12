import React from "react";
import ReactDom from "react-dom";

const Search = ({ setSearch }) => {
  return ReactDom.createPortal(
    <>
      <div
        onClick={() => setSearch(false)}
        className="Portol bg-black bg-opacity-20 w-full h-full absolute top-0 z-20 flex justify-center items-center"
      ></div>
    </>,
    document.body // Render the component as a portal in the body of the HTML
  );
};

export default Search;
