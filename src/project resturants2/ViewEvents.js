import React from "react";
import { useNavigate } from "react-router-dom";

function ViewEvents() {
  const navigate = useNavigate();

  const events = [
    { name: "Live Music Night", date: "Every Friday", description: "Enjoy live music with your dinner.", image: require("../project resturants2/images/Live Music Night.avif") },
    { name: "Wine Tasting", date: "First Saturday of the Month", description: "Sample premium wines.", image: require("../project resturants2/images/Wine Tasting.avif") },
    { name: "Cooking Workshop", date: "Next Sunday", description: "Learn to cook with our chefs.", image: require("../project resturants2/images/Cooking Workshop.jpg") },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Upcoming Events</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {events.map((event, index) => (
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
              src={event.image}
              alt={event.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3 style={{ color: "#ff5722", margin: "10px 0" }}>{event.name}</h3>
            <p style={{ color: "#555" }}>{event.date}</p>
            <p style={{ color: "#777" }}>{event.description}</p>
            <button
              style={{
                backgroundColor: "#2ecc71",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc71")}
              onClick={() => navigate("/about-us", { state: { event } })}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewEvents;
