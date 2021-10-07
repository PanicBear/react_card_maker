import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.module.css";
import Login from "./component/login/login";
import Main from "./component/main/main";

const App = ({ auth, db, cloudinary }) => {
  const [data, setData] = useState({});
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route>
          <Main data={data} setData={setData} auth={auth} db={db} cloudinary={cloudinary} path={["/", "/main"]} exact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
