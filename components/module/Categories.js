import styles from './Categories.module.css'
import Link from 'next/link';
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";


function Categories() {
  return (
    <div className={styles.container}>
        <Link href='/categories/sedan'>
            <span>Sedan</span>
            <Sedan/>
        </Link>
        <Link href='/categories/suv'>
            <span>SUV</span>
            <Suv/>
        </Link>
        <Link href='/categories/hatchback'>
            <span>Hatchback</span>
            <Hatchback/>
        </Link>
        <Link href='/categories/sport'>
            <span>sport</span>
            <Sport/>
        </Link>

    </div>
  )
}

export default Categories