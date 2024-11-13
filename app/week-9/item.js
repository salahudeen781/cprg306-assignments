import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border border-red-500 bg-white cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <h1>{name}</h1>
      <p>
        Buy{quantity} in {category}
      </p>
    </li>
  );
}
