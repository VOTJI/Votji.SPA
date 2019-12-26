import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Home } from "./pages/home";
import { Auth } from "./pages/auth";

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
    font-family: open-sans;
    font-size: 1.4rem;
    background-color: #0F0F0F;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
