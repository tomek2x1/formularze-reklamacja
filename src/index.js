import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const data = {
  producers: [
    "Blaupunkt",
    "Climative",
    "Danfoss",
    "Devi",
    "Digitime",
    "Dimplex",
    "Ebeco",
    "Eberle",
    "Emko",
    "Esco",
    "Nexans",
    "Rotenso",
    "Sonniger",
    "Thermoval",
    "Vaco",
    "Warmtec",
    "Inny",
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
