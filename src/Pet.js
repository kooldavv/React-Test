import React from "react";

const Pet = (Proper) => {
  return (
    <div>
      <h2>{Proper.name}</h2>
      <h3>{Proper.animal}</h3>
      <h3>{Proper.breed}</h3>
      <h3>{Proper.id}</h3>
    </div>
  );
};

export default Pet;
