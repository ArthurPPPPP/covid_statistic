import React from "react";
import logo from "../../assets/img/logo.png";
import { SearchInput } from "../SearchInput/SearchInput";
import styles from "./header.module.scss";

export const Header = ({ setValue, searchValue }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <h1>Statistic</h1>
      </div>
      <section role="search">
        <SearchInput searchValue={searchValue} onChange={setValue} />
      </section>
    </header>
  );
};
