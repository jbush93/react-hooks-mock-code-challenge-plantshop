import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage()
{

  const [plants, setPlants] = useState([])

  useEffect(function ()
  {
    fetch("http://localhost:6001/plants")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (plantData)
      {
        return setPlants(plantData)
      })
  }, [])

  function handleNewPlant(newPlant)
  {
    setPlants([...plants, newPlant])
  }

  const [searchInput, setSearchInput] = useState("")
  function handleSearchInput(e)
  {
    setSearchInput(e.target.value)
  }

  const filterPlants = plants.filter(function (plant)
  {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  function handlePlantDelete(deletedPlant)
  {
    const updatedPlants = plants.filter(function (plant)
    {
      return plant.id !== deletedPlant.id
    })
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <PlantList plants={filterPlants} handlePlantDelete={handlePlantDelete} />
    </main>
  );
}

export default PlantPage;
