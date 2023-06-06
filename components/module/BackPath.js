import Back from "../icons/Back";
import styles from './BackPath.module.css'
import { useRouter } from "next/router";

function BackPath() {
    const router = useRouter();
    const backHandler = () => {
      router.back();
    };
  return (
    <div className={styles.back} onClick={backHandler}>
    <Back />
    <p>back</p>
  </div>
  )
}

export default BackPath