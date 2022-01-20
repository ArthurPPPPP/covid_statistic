import React, { useState, useEffect } from "react";
import styles from "../../styles/styles.module.scss";
import { loadStatistic } from "../../api/statistic";
import { Loader } from "../../components/Loader/Loader";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { StatisticTable } from "../../components/StatisticTable/StatisticTable";

export const StatisticPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statistic, setStatistic] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const getStatistic = async () => {
    setIsLoading(true);
    try {
      const data = await loadStatistic();
      setStatistic(data.Countries);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getStatistic();
  }, []);
  const searchingValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onSelectCountry = (value) => {
    setSelectedCountry(value);
  };

  const modalOpen = () => {
    setModalActive(true);
  };
  const modalClose = () => {
    setModalActive(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <Header setValue={searchingValue} searchValue={searchValue} />
          <main>
            <StatisticTable
              statistic={statistic}
              setModalActive={modalOpen}
              onSelectCountry={onSelectCountry}
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
    </>
  );
};
