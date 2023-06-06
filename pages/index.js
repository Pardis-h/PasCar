import carsData from "../data/carsData";
import Cars from "../components/templates/Cars";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import AllBtn from "../components/module/AllBtn";

export default function Home() {
  const data = carsData.slice(0,3)
  return (
    <>
      <SearchBar/>
      <Categories />
      <AllBtn/>
      <Cars data={data} />
    </>
  )
}
