import React from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import Section from "../section/section";

const Login = (props) => {
  const history = useHistory();
  return (
    <div className={styles.layer}>
      <div className={styles.modal}>
        <Header />
        <Section />
        <Footer />
        {/* <button onClick={() => history.push("/")}>메인페이지로</button> */}
      </div>
    </div>
  );
};
export default Login;
