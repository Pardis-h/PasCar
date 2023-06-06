import carsData from "../../data/carsData";
import Cars from "../../components/templates/Cars";
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";
import BackPath from "../../components/module/BackPath";

function Detail() {
  return (
    <>
      <BackPath/>
      <SearchBar/>
      <Categories />
      <Cars data={carsData} />
    </>
  );
}

export default Detail;
