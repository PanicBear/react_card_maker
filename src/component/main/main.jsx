import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./main.module.css";

const Main = ({ auth }) => {
  const history = useHistory();
  useEffect(() => auth.checkCredential(history), [auth, history]);
  return (
    <>
      <h1>Main</h1>
      <button className={styles.btn} onClick={() => auth.resetCredential()}>
        signOut
      </button>
    </>
  );
};

export default Main;
