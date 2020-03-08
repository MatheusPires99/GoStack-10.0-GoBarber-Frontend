import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "./config/ReactotronConfig";

import Routes from "./routes";
import hisotry from "./services/history";

import store from "./store";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Router history={hisotry}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
