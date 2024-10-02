import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-red-500 bg-white">
      <h1>{name}</h1>
      <p>
        Buy{quantity} in {category}
      </p>
    </li>
  );
}
