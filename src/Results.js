import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1> Pets no Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
