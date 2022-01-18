import React from "react";

export const TableItem = ({
  countryInfo,
  countryNumber,
  modalContent,
  setModalActive,
}) => {
  console.log("tableItem");
  return (
    <tr
      onClick={() => {
        modalContent(countryInfo);
        setModalActive(true);
      }}
    >
      <td>{countryNumber}</td>
      <td>{countryInfo.Country}</td>
      <td>{countryInfo.TotalConfirmed}</td>
    </tr>
  );
};
