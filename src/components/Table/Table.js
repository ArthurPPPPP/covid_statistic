import React from "react";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableItem } from "../TableItem/TableItem";
import styles from "./table.module.scss";
export const Table = ({
  filteredCountries,
  onSelectCountry,
  setModalActive,
  setSortType,
}) => {
  return (
    <table className={styles.table}>
      <TableHeader setSortType={setSortType} />
      <tbody>
        {filteredCountries.map((n, index) => (
          <TableItem
            setModalActive={setModalActive}
            countryInfo={n}
            countryNumber={index + 1}
            key={n.ID}
            onSelectCountry={onSelectCountry}
          />
        ))}
      </tbody>
    </table>
  );
};
