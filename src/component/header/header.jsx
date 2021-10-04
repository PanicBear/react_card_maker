import React from "react";
import styles from "./header.module.css";
const Header = ({ auth }) => {
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.title}  ${auth && styles.signed}`}>
        <img className={styles.logo} src="./images/logo.png" alt="logo" />
        <h1 className={styles.text}>Buisiness Card Maker</h1>
      </div>
      {auth && (
        <button
          className={styles.logout}
          onClick={() => auth.resetCredential()}
        >
          logout
        </button>
      )}
    </header>
  );
};
export default Header;
