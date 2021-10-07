import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Card from "../card/card";
import Footer from "../footer/footer";
import Header from "../header/header";
import InputTable from "../input-table/input-table";
import styles from "./main.module.css";

const Main = ({ data, setData, auth, db, cloudinary }) => {
  const history = useHistory();
  const dataEntries = data && Object.keys(data).length ? Object.entries(data) : null;
  useEffect(() => {
    auth.getCurrentUser() ?? history.push('/login')
  }, [auth, history])
  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    currentUser && db.R(currentUser.uid, setData,);
  }, [auth, setData, db])
  return (
    <div className={styles.main}>
      <Header auth={auth} />
      <section className={styles.section}>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Maker</h1>
          </div>
          {
            dataEntries && dataEntries.map((entry) => {
              const [key, value] = entry;
              return <InputTable key={`InputTable-${key}`} id={key} auth={auth} data={value} db={db} cloudinary={cloudinary} />;
            })
          }
          <InputTable auth={auth} id={null} data={null} db={db} cloudinary={cloudinary} />
        </div>
        <div className={styles.page}>
          <div className={styles.title}>
            <h1>Card Preview</h1>
          </div>
          {
            dataEntries && dataEntries.map((entry) => {
              const [key, value] = entry;
              return (<Card key={`Card-${key}`} data={value} />)
            })
          }
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
