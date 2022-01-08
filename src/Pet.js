import React from "react";

const Pet = (Proper) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, Proper.Name),
    React.createElement("h2", {}, Proper.Contract),
    React.createElement("h2", {}, Proper.Tipe),
  ]);
};

export default Pet;
