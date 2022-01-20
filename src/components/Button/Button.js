import React from "react";
import styles from "./button.module.scss";

export const Button = ({ children, setActive }) => {
  return (
    <button onClick={() => setActive(false)} className={styles.buttonComponent}>
      {children}
    </button>
  );
};
