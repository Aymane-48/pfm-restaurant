import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const dishes = [
    { id: 1, name: "Chicken Pizza", price: "$12", image: require("../project resturants2/images/Chicken Pizza.avif"), ingredients: ["Chicken", "Cheese", "Tomato Sauce", "Dough"] },
    { id: 2, name: "Biryani", price: "$10", image: require("../project resturants2/images/Biryani.jpg"), ingredients: ["Rice", "Mutton", "Spices"] },
    { id: 3, name: "Spaghetti Pasta", price: "$8", image: require("../project resturants2/images/Spaghetti Pasta.avif"), ingredients: ["Pasta", "Tomato Sauce", "Parmesan"] },
    { id: 4, name: "Cheeseburger", price: "$7", image: require("../project resturants2/images/Cheeseburger.avif"), ingredients: ["Bun", "Beef Patty", "Cheese", "Lettuce"] },
    { id: 5, name: "Chocolate Cake", price: "$6", image: require("../project resturants2/images/Chocolate Cake.avif"), ingredients: ["Flour", "Chocolate", "Sugar", "Eggs"] },
    { id: 6, name: "Grilled Chicken", price: "$14", image: require("../project resturants2/images/Grilled Chicken.avif"), ingredients: ["Chicken", "Spices", "Lemon"] },
    { id: 7, name: "Caesar Salad", price: "$9", image: require("../project resturants2/images/Caesar Salad.avif"), ingredients: ["Lettuce", "Croutons", "Caesar Dressing"] },
    { id: 8, name: "Fish Curry", price: "$13", image: require("../project resturants2/images/Fish Curry.avif"), ingredients: ["Fish", "Coconut Milk", "Spices"] },
    { id: 9, name: "Sushi Rolls", price: "$15", image: require("../project resturants2/images/Sushi Rolls.avif"), ingredients: ["Rice", "Fish", "Seaweed"] },
    { id: 10, name: "Steak", price: "$20", image: require("../project resturants2/images/Steak.avif"), ingredients: ["Beef", "Salt", "Pepper"] },
  ];

  return (
    <div>
      <h1>Our Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              margin: "20px",
              textAlign: "center",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }}
            />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>

            {/* View Recipe Button */}
            <Link
              to="/recipe-details"
              state={{ dishName: dish.name, dishIngredients: dish.ingredients, dishImage: dish.image }}
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  margin: "5px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                View Recipe
              </button>
            </Link>

            {/* Order Now Button */}
            <Link
              to="/order"
              state={{ dishName: dish.name, dishImage: dish.image }}
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  margin: "5px",
                  backgroundColor: "#5cb85c",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Order Now
              </button>
            </Link>

            {/* View Review Button */}
            <Link
              to="/review"
              state={{ dishName: dish.name, dishImage: dish.image }}
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  margin: "5px",
                  backgroundColor: "#f0ad4e",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                View Review
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
