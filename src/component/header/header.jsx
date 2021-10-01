import React from "react";
import styles from "./header.module.css";
const Header = (props) => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src="./images/logo.png" alt="logo" />
      <h1 className={styles.text}>Buisiness Card Maker</h1>
    </header>
  );
};
export default Header;
