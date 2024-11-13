import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen  bg-[#F6F6F6]">
        <Header />
        <ProductsList />
      </div>
    </>
  );
};

export default App;
