import React from "react";
import styles from "./search.module.scss";

export const SearchInput = ({ onChange, searchValue }) => {
  return (
    <form className={styles.searchingForm} role="search">
      <input
        className={styles.searchingInput}
        value={searchValue}
        type="search"
        placeholder="Search..."
        onChange={onChange}
      ></input>
    </form>
  );
};
