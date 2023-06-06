import styles from './AllBtn.module.css'; 
import Link from 'next/link'

function AllBtn() {
  return (
    <div className={styles.container}>
        <Link href='/cars' >
            See All Cars
        </Link>
    </div>
  )
}

export default AllBtn