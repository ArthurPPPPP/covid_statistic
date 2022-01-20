import React, { useState, useEffect } from "react";

import { loadStatistic } from "../../api/statistic";

import { StatisticList } from "../../components/StatisticList/StatisticList";

export const StatisticPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statistic, setStatistic] = useState([]);

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

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StatisticList statistic={statistic} isLoading={isLoading} />
      )}
    </>
  );
};
