import React from "react";
import { useState } from "react";
import styles from "../../styles/styles.module.scss";
import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import { StatisticTable } from "../StatisticTable/StatisticTable";

export const StatisticList = ({ statistic, isLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const inputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const countriesInfo = (value) => {
    setSelectedCountry(value);
  };

  const modalOpen = () => {
    setModalActive(true);
  };
  const modalClose = () => {
    setModalActive(false);
  };

  return (
    <div className={styles.wrapperContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.wrapper}>
          <Header setValue={inputValue} searchValue={searchValue} />
          <main>
            <StatisticTable
              statistic={statistic}
              setModalActive={modalOpen}
              countriesInfo={countriesInfo}
              searchValue={searchValue}
            />
          </main>
          <Modal
            active={modalActive}
            selectedCountry={selectedCountry}
            modalOpen={modalOpen}
            modalClose={modalClose}
          />
        </div>
      )}
    </div>
  );
};
