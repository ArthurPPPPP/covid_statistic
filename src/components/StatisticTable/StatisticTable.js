import { Table } from "../Table/Table";
import React, { useState } from "react";

export const SORT_TYPES = {
  DEFAULT: "Default",
  TOTAL: "TotalConfirmed",
  COUNTRY: "Country",
};
export const StatisticTable = ({
  statistic,
  setModalActive,
  onSelectCountry,
  searchValue,
}) => {
  const [sortType, setSortType] = useState(SORT_TYPES.DEFAULT);

  const sortByCountry = () => {
    return [...statistic].sort((a, b) =>
      a[SORT_TYPES.COUNTRY]
        .toString()
        .localeCompare(b[SORT_TYPES.COUNTRY].toString())
    );
  };
  const sortByTotalConfirmed = () => {
    return [...statistic].sort((a, b) =>
      Number(b[SORT_TYPES.TOTAL] - Number(a[SORT_TYPES.TOTAL]))
    );
  };

  const getSortedItems = () => {
    switch (sortType) {
      case SORT_TYPES.TOTAL:
        return sortByTotalConfirmed();
      case SORT_TYPES.COUNTRY:
        return sortByCountry();
      default:
        return statistic;
    }
  };

  const items = getSortedItems();

  const filteredCountries = (value) => {
    return value.filter((filtered) => {
      return filtered.Country.toLowerCase().includes(searchValue.toLowerCase());
    });
  };
  return (
    <Table
      setSortType={setSortType}
      filteredCountries={filteredCountries(items)}
      onSelectCountry={onSelectCountry}
      setModalActive={setModalActive}
    />
  );
};
