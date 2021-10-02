import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.module.css";
import Login from "./component/login/login";
import Main from "./component/main/main";

const App = ({ auth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route>
          <Main auth={auth} path={["/", "/main"]} exact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
