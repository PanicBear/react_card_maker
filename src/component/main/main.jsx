import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Card from "../card/card";
import Footer from "../footer/footer";
import Header from "../header/header";
import InputTable from "../input-table/input-table";
import styles from "./main.module.css";

const Main = ({ data, setData, auth, db }) => {
  const history = useHistory();
  useEffect(() => {
    auth.getCurrentUser() ?? history.push('/login')
  }, [auth, history]);
  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    currentUser && db.R(setData, currentUser.uid);
  }, [])
  return (
    <div className={styles.main}>
      <Header auth={auth} />
      <section className={styles.section}>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Maker</h1>
          </div>
          {data.map((el, index) => {
            return <InputTable key={`InputTable${index}`} auth={auth} data={el} db={db} />;
          })}
          <InputTable auth={auth} data={null} db={db} />
        </div>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Preview</h1>
          </div>
          {data.map((el, index) => (
            <Card key={`Card${index}`} data={el} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
