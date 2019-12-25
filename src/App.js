import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signUp";
import { LogIn } from "./pages/logIn";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
