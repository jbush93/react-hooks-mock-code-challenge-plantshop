import React, { useState } from "react";

function PlantCard({ plant, handlePlantDelete })
{

  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  function handleClick()
  {
    setInStock(!inStock)
  }

  function handleDelete()
  {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function ()
      {
        handlePlantDelete(plant)
      })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      {/* <button onClick={handleClick}>{inStock ? "In Stock" : "Out of stock"}</button> */}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
