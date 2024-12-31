import React from "react";
import { useLocation } from "react-router-dom";

function RecipeDetails() {
  const location = useLocation();
  const { dishName, dishIngredients, dishImage } = location.state;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{dishName}</h1>
      <img
        src={dishImage}
        alt={dishName}
        style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h3>Ingredients:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {dishIngredients.map((ingredient, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
