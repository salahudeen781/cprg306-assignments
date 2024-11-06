"use client";
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "Grouped category") {
      return (a.Groupedcategory || "").localeCompare(b.Groupedcategory || "");
    }
    return 0;
  });

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
            onselect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
