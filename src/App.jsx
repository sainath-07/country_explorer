import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route
          path="/country/name/:CountryName/:id"
          element={<CountryDetails />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
