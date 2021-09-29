import React from "react";
import {Router} from "@reach/router";
import { Home, AddUser } from "./pages";

const App = () => {
  return <Router className="router">
      <Home path="/" />
      <AddUser path="create" />
  </Router>;
}

export default App;
