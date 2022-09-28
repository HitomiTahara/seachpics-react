import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ReactDOM.render(<App />, document.querySelector("#root"));

//New one
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
