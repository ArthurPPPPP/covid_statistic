import React from "react";
import { SORT_TYPES } from "../StatisticTable/StatisticTable";
import styles from "./tableHeader.module.scss";

export const TableHeader = ({ setSortType }) => {
  return (
    <thead>
      <tr className={styles.headerContent}>
        <th
          className={styles.number}
          onClick={() => setSortType(SORT_TYPES.DEFAULT)}
        >
          №
        </th>
        <th
          className={styles.country}
          onClick={() => setSortType(SORT_TYPES.COUNTRY)}
        >
          Country
        </th>
        <th
          className={styles.totalConfirmed}
          onClick={() => setSortType(SORT_TYPES.TOTAL)}
        >
          Total Confirmed
        </th>
      </tr>
    </thead>
  );
};
