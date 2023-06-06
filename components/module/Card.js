import styles from './Card.module.css'
import Link from 'next/link';
import Location from '../icons/Location';

function Card(props) {
    const {name,image,id, model, year,distance,price,location} = props;
  return (
    <Link href={`/cars/${id}`}>
        <div className={styles.carCard}>
            <img src={image} alt={name} />
            <h3>{`${name} ${model}`}</h3>
            <p>{`${year} - ${distance}`}</p>
            <div className={styles.footer}>
              <p>$ {price}</p>
              <div className={styles.location}>
                <p>{location}</p>
                <Location/>
              </div>
            </div>
        </div>
    </Link>
  )
}

export default Card