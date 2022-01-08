import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},

    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      Contract: "900156264",
      Name: "NuevaEps",
      Tipe: "Contribuido",
    }),
    React.createElement(Pet, {
      Contract: "900999864",
      Name: "Ecopetrol",
      Tipe: "Subsidiado",
    }),
    React.createElement(Pet, {
      Contract: "900364268",
      Name: "Fuerzas",
      Tipe: "Contribuido",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
