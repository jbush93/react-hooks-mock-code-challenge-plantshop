import React, { useState } from "react";

function NewPlantForm({ handleNewPlant })
{

  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [priceInput, setPriceInput] = useState(0)

  function handleNameInput(e)
  {
    setNameInput(e.target.value)
  }
  function handleImageInput(e)
  {
    setImageInput(e.target.value)
  }
  function handlePriceInput(e)
  {
    setPriceInput(e.target.value)
  }

  function handleSubmit(e)
  {
    e.preventDefault()

    let formData = {
      name: nameInput,
      image: imageInput,
      price: priceInput
    }

    fetch("http://localhost:6001/plants", {
      method: 'Post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (newPlant)
      {
        handleNewPlant(newPlant)
      })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameInput} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageInput} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceInput} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
