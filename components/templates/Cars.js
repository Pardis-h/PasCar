import Card from '../module/Card'
import styles from './Cars.module.css'

function Cars({data}) {
  return (
    <div className={styles.container}>
    {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  )
}

export default Cars