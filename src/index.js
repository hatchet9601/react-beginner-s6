// import { StrictMode } from "react";
import React from "react"; //バージョンアップがあり、JSXを使用するだけであれば不要
import ReactDom from "react-dom";
import App from "./App.jsx";

ReactDom.render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
  document.getElementById("root")
);
