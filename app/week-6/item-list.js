"use client";
import Item from "./item";
import React, { useState } from "react";
import items from "./items.json";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : sortBy === "category"
      ? a.category.localeCompare(b.category)
      : sortBy === "Grouped category"
      ? (a.Groupedcategory || "").localeCompare(b.Groupedcategory || "")
      : 0
  );

  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy("name")}
          className="bg-orange-500 text-white p-3 m-3"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-orange-500 text-white p-3"
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("Grouped category")}
          className="bg-orange-500 text-white p-3 m-3"
        >
          Grouped Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
