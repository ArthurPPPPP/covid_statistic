import React from "react";
import "./modalModule.scss";
export const Modal = ({ active, setActive, selectedCountry }) => {
  console.log(selectedCountry);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="madal__content" onClick={(e) => e.stopPropagation()}>
        <div>{selectedCountry.Country}</div>
        <div>{selectedCountry.TotalConfirmed}</div>
        <div>{selectedCountry.TotalDeaths}</div>
        <div>{selectedCountry.TotalRecovered}</div>
        <button>Ok</button>
      </div>
    </div>
  );
};
