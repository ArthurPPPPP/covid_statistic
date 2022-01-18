import React from "react";
import logo from "../../assets/img/logo.jpg";
import { Search } from "../Search/Search";
export const Header = ({ getValue, searcData }) => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Statistic</h1>
      </div>
      <section role="search">
        <Search getValue={getValue} searcData={searcData} />
      </section>
    </header>
  );
};
