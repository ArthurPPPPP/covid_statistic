import React from "react";
import "./modalModule.scss";
import confirmedIco from "../../assets/img/health.jpg";
import deathIco from "../../assets/img/death.jpg";
import recovereddIco from "../../assets/img/recovered.jpg";
import { Button } from "../Button/Button";

export const Modal = ({ active, modalOpen, modalClose, selectedCountry }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => modalOpen(false)}
    >
      <div className="modal__wrapper">
        <div className="madal__content" onClick={(e) => e.stopPropagation()}>
          <h1>{selectedCountry.Country}</h1>
          <div>
            <div className="content">
              <img src={confirmedIco} alt="Confirmed" />
              <span>Total Confirmed</span>
              <p>{selectedCountry.TotalConfirmed}</p>
            </div>
            <div className="content">
              <img src={deathIco} alt="Deaths" />
              <span>Total Deaths</span>
              <p>{selectedCountry.TotalDeaths}</p>
            </div>
            <div className="content">
              <img src={recovereddIco} alt="Recovered" />
              <span>Total Recovered</span>
              <p>{selectedCountry.TotalRecovered}</p>
            </div>
          </div>
          <Button onClick={modalClose}>OK</Button>
        </div>
      </div>
    </div>
  );
};
