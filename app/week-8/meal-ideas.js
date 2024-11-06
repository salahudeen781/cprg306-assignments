"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const Mealideas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas {ingredient}</h2>
      <h3>select an Item to see Meal ideas</h3>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Mealideas;
