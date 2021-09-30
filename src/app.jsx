import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/login/login';
import Main from './component/main/main';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Main path={["/", "/main"]} exact />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;