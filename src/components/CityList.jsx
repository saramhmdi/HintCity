import React from "react";

import styles from "./CityList.module.css";
function CityList({cities}) {
  return (
    <ul className={styles.cityList}>
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <li key={index} className={styles.cityListItem}>
            {city}
          </li>
        ))
      ) : (
        <li className={styles.noMatch}>No match found</li>
      )}
    </ul>
  );
}

export default CityList;
