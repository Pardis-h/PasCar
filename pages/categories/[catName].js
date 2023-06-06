import CarList from '../../components/templates/CarList';
import { useRouter } from 'next/router';
import carsData from "../../data/carsData";

function Cat() {
    const router = useRouter();
    const {catName} = router.query;
    const data = carsData.filter(car => car.category === catName)
    console.log(data);
  return (
    <CarList data={data} />
  )
}

export default Cat