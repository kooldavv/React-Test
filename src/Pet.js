import React from "react";

const Pet = (pets) => {
  return (
    <div>
      <h2>{pets.name}</h2>
      <h3>{pets.animal}</h3>
      <h3>{pets.breed}</h3>
      <h3>{pets.id}</h3>
    </div>
  );
};

export default Pet;
