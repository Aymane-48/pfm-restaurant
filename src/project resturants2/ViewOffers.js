import React from "react";
import { Link } from "react-router-dom";

function ViewOffers() {
  const offers = [
    { name: "50% Off on Pizza", description: "Valid till this weekend", image: require("../project resturants2/images/Chicken Pizza.avif") },
    { name: "20% Off on Pasta", description: "Available on weekdays", image: require("../project resturants2/images/Spaghetti Pasta.avif") },
    { name: "30% Biryani", description: "Available on two weekdays", image: require("../project resturants2/images/Biryani.jpg") },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Our Special Offers</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {offers.map((offer, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={offer.image}
              alt={offer.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3 style={{ color: "#ff5722", margin: "10px 0" }}>{offer.name}</h3>
            <p style={{ color: "#555" }}>{offer.description}</p>
            <Link
              to="/order"
              state={{
                dishName: offer.name,
                dishImage: offer.image,
              }}
            >
              <button
                style={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff5722")}
              >
                Claim Offer
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewOffers;
