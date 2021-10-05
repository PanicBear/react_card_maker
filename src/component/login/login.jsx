import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import LoginModal from "../login-modal/login-modal";
import styles from "./login.module.css";

const Login = ({ auth }) => {
  const history = useHistory();
  useEffect(
    () => {
      auth.getCurrentUser() && history.push('/');
      auth.checkCredential(history);
    }, [auth, history]
  );
  return (
    <div className={styles.layer}>
      <div className={styles.modal}>
        <Header />
        <LoginModal auth={auth} />
        <Footer />
        {/* <button onClick={() => history.push("/")}>메인페이지로</button> */}
      </div>
    </div>
  );
};
export default Login;
