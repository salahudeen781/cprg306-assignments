"use client";
import React, { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Mealideas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[^\x00-\x7F]/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-4">
        <Mealideas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
