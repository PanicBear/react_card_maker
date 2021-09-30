import React from 'react';
import { useHistory } from 'react-router';

const Main = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Main</h1>
      <button onClick={() => history.push("/login")}>로그인</button >
    </>
  );
}

export default Main;