const Pagination = ({ countryList, handlePagination, pageNo }) => {
  let pageNumbers = [];
  for (let i = 1; i <= countryList.length / 25; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex w-full justify-start L_Mobile:justify-center flex-wrap items-center  gap-2 mb-8">
        {pageNumbers.map((ele, index) => (
          <p
            onClick={() => handlePagination(ele)}
            key={index}
            style={{
              backgroundColor: pageNo === ele ? "#306BEA" : "#FFFFFF",
              color: pageNo === ele ? "#FFFFFF" : "#306BEA",
            }}
            className="border p-2 px-3  rounded-md cursor-pointer "
          >
            {" "}
            {ele}
          </p>
        ))}
      </div>
    </>
  );
};

export default Pagination;
