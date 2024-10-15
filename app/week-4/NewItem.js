"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-row justify-center gap-4 border-2 m-5  bg-black p-4 ">
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
    </div>
  );
}
