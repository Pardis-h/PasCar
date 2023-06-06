import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter Min and Max!");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          name="min"
          id="min"
          placeholder="Enter Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="text"
          name="max"
          id="max"
          placeholder="Enter Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button type="submit" onClick={searchHandler}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
