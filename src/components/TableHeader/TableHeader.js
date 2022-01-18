import React from "react";
import { SORT_TYPES } from "../../pages/StatisticPage/StatisticPage";
export const TableHeader = ({ sort }) => {
  console.log("table");
  return (
    <thead>
      <tr>
        <th onClick={() => sort(SORT_TYPES.DEFAULT)}>№</th>
        <th onClick={() => sort(SORT_TYPES.COUNTRY)}>Country</th>
        <th onClick={() => sort(SORT_TYPES.TOTAL)}>Total Confirmed</th>
      </tr>
    </thead>
  );
};
