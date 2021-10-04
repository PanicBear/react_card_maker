import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./app.module.css";
import Login from "./component/login/login";
import Main from "./component/main/main";

const App = ({ auth, db }) => {
  const [data, setData] = useState([
    {
      name: "Ellie",
      company: "Samsung Electronics",
      color: "Light",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      photo: null,
    },
    {
      name: "Bob",
      company: "Uber",
      color: "Dark",
      title: "Senior Software Engineer",
      email: "bog@uber.com",
      message: "I love coding",
      photo: null,
    },
    {
      name: "Chris",
      company: "Instagram",
      color: "Colorful",
      title: "Product Manager",
      email: "christ@instagram.com",
      message: "Design your dream",
      photo: null,
    },
  ]);
  useEffect(() => {
    // db.R(0);
  }, [db]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route>
          <Main data={data} auth={auth} path={["/", "/main"]} exact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
