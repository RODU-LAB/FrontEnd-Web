import React from "react";
import { useReactiveVar } from "@apollo/client";
import { LoggedInRouter } from "./routers/logged-in-router";
import { LoggedOutRouter } from "./routers/logged-out-router";

export const App = () => {
  return  <LoggedOutRouter />;
};

export default App;
