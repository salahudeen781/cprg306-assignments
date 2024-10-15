"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    // alert("Added item: " + { name } + "quantity" + { quantity } +"Category" + {category});
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setQuantity(1);
    setName("");
    setCategory("produce");
  };

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-row justify-center gap-4 border-2 m-5  bg-black p-4 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="item name"
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3"
        ></input>

        <h1 className="text-white py-2 px-4 mt-5 mr-2">{quantity}</h1>
        <button
          className="bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400 "
          onClick={() => increment()}
        >
          +
        </button>
        <button
          className="bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"
          onClick={() => decrement()}
        >
          -
        </button>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400 flex justify-center w-full"
        >
          +
        </button>
      </form>
    </div>
  );
}
