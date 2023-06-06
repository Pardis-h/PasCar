import { useRouter } from "next/router";
import carData from "../../data/carsData";
import CarList from "../../components/templates/CarList";

function Search() {
  const router = useRouter();
  const [min, max] = router.query.slug;

    const data = carData.filter(car => car.price > min && car.price <max);
    console.log(data);
  return <CarList data={data}/>;
}

export default Search;
