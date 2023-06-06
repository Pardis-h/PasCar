import BackPath from "../module/BackPath";
import Card from "../module/Card";
import styles from "./CarList.module.css";

function CarList({ data }) {
  return (
    <>
      <BackPath />
      <div className={styles.container}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </>
  );
}

export default CarList;
