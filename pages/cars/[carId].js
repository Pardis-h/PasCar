import { useRouter } from "next/router";
import carData from "../../data/carsData";
import CarDetailes from "../../components/templates/CarDetailes";
function CarDetail() {
  const router = useRouter();

  const { carId } = router.query;
  const data = carData[carId - 1];

  return <CarDetailes {...data} />;
}

export default CarDetail;
