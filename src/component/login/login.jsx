import React from 'react';
import { useHistory } from 'react-router';

const Login = (props) => {
  const history = useHistory();
  return (
    <>
      <header>
        <img src="./images/logo.png" alt="logo" />
        <h1>Buisiness Card Maker</h1>
      </header>
      <footer>
        Lorem Ipsum
      </footer>
      <button onClick={() => history.push("/")}>메인페이지로</button >
    </>
  );
}
export default Login;