import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handlePlantDelete })
{

  const mappedPlants = plants.map(function (plant)
  {
    return <PlantCard key={plant.id} plant={plant} handlePlantDelete={handlePlantDelete} />
  })
  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
