import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Home } from "./pages/home";
import { SignUp } from "./pages/signUp";
import { LogIn } from "./pages/logIn";

// 1rem = 16pixel i.e making html font-size 65.5% makes 1rem = 10pixel (just for easy calculation)
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  *, *:before, *: after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    font-size: 1.4rem;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
