import React from "react";
import { useState } from "react";
import styles from "../../styles/styles.module.scss";
import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import { Table } from "../Table/Table";

export const SORT_TYPES = {
  DEFAULT: "Default",
  TOTAL: "TotalConfirmed",
  COUNTRY: "Country",
};

export const StatisticList = ({ statistic, isLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPES.DEFAULT);

  const inputValue = (value) => {
    setSearchValue(value);
  };

  const countriesInfo = (value) => {
    setSelectedCountry(value);
  };

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
    <div className={styles.wrapperContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.wrapper}>
          <Header setValue={inputValue} searchValue={searchValue} />
          <main>
            <Table
              setSortType={setSortType}
              filteredCountries={filteredCountries(items)}
              countriesInfo={countriesInfo}
              setModalActive={setModalActive}
            />
          </main>
          <Modal
            active={modalActive}
            setActive={setModalActive}
            selectedCountry={selectedCountry}
          />
        </div>
      )}
    </div>
  );
};
