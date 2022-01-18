import React, { useState, useEffect } from "react";
import { loadStatistic } from "../../api/loadStatistic";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { Table } from "../../components/Table/Table";

export const SORT_TYPES = {
  DEFAULT: "Default",
  TOTAL: "TotalConfirmed",
  COUNTRY: "Country",
};

export const StatisticPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statistic, setStatistic] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPES.DEFAULT);
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
  const searcData = (value) => {
    setSearchValue(value);
  };
  const modalContent = (value) => {
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
  const filteredInfo = items.filter((filtered) => {
    return filtered.Country.toLowerCase().includes(searchValue.toLowerCase());
  });

  console.log("info");
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Header getValue={searcData} searchValue={searchValue} />
          <main>
            <Table
              sort={setSortType}
              data={filteredInfo}
              modalContent={modalContent}
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
