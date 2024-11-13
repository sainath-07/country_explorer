const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        src="https://www.mongodb.com/assets/images/404/sadface.gif"
        className="w-1/4"
        alt="Page Not Found"
      />
      <div className="text-[#42494f] font-semibold">
        <p className="text-2xl">{"{"} status: 404,</p>
        <p className="text-2xl">{'  message: "Page not found.”' + " }"}</p>
      </div>
    </div>
  );
};

export default PageNotFound;
