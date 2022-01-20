import React from "react";
import styles from "./search.module.scss";

export const SearchInput = ({ setValue, searchValue }) => {
  return (
    <form className={styles.searchingForm} role="search">
      <input
        className={styles.searchingInput}
        value={searchValue}
        type="search"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button
        onClick={(e) => {
          e.preventDefault();
          setValue("");
        }}
      >
        X
      </button>
    </form>
  );
};
