import styles from "./CarDetailes.module.css";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Money from "../icons/Money";
import BackPath from "../module/BackPath";

function CarDetails(props) {
  const {
    name,
    image,
    id,
    model,
    year,
    distance,
    location,
    price,
    description,
  } = props;

  return (
    <>
      <BackPath />
      <div className={styles.container}>
        <img src={image} alt={name} />
        <div>
          <h2>
            {name} {model}
          </h2>
        </div>
        <div className={styles.detail}>
          <div>
            <Company />
            <p>Company</p>
            <span>{name}</span>
          </div>
          <div>
            <Model />
            <p>Model</p>
            <span>{model}</span>
          </div>
          <div>
            <Calender />
            <p>First registration</p>
            <span>{year}</span>
          </div>
          <div>
            <Road />
            <p>km driven</p>
            <span>{distance}</span>
          </div>
        </div>
        <div className={styles.detail}>
          <div>
            <Location />
            <p>Location</p>
            <span>{location}</span>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Extra Information</p>
          <p>{description}</p>
        </div>
        <div className={styles.detail}>
          <div>
            <Money />
            <p>Price:</p>
            <span>$ {price}</span>
          </div>
        </div>
        <button>Buy</button>
      </div>
    </>
  );
}

export default CarDetails;
