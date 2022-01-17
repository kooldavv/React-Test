import React from "react";

const Pet = (Proper) => {
  return (
    <div>
      <h2>{Proper.name}</h2>
      <h3>{Proper.Contract}</h3>
      <h3>{Proper.Tipe}</h3>
    </div>
  );
};

export default Pet;
