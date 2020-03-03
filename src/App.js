import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import hisotry from "./services/history";

function App() {
  return (
    <Router history={hisotry}>
      <Routes />
    </Router>
  );
}

export default App;
