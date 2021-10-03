import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import InputTable from "../input-table/input-table";
import styles from "./main.module.css";

const Main = ({ auth }) => {
  const history = useHistory();
  useEffect(() => auth.checkCredential(history), [auth, history]);
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Maker</h1>
          </div>
          <InputTable />
        </div>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Preview</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Main;
