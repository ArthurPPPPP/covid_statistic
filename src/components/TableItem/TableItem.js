import React from "react";
import styles from "./item.module.scss";

export const TableItem = ({
  countryInfo,
  countryNumber,
  onSelectCountry,
  setModalActive,
}) => {
  return (
    <tr
      className={styles.item}
      onClick={() => {
        onSelectCountry(countryInfo);
        setModalActive(true);
      }}
    >
      <td className={styles.countryNumber}>{countryNumber}</td>
      <td className={styles.Country}>{countryInfo.Country}</td>
      <td className={styles.TotalConfirmed}>{countryInfo.TotalConfirmed}</td>
    </tr>
  );
};
