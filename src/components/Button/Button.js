import React from "react";
import styles from "./button.module.scss";

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonComponent}>
      {children}
    </button>
  );
};
