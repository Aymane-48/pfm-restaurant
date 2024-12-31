import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Order({ addOrUpdateOrder }) {
  const location = useLocation();
  const {
    dishName,
    dishImage,
    Name: prevName = "",
    Adrese: prevAdres = "",
    PhoneNum: prevPhoneNum = "",
    index = null,
  } = location.state || {}; 

  const [Adrese, setAdres] = useState(prevAdres);
  const [Name, setName] = useState(prevName);
  const [PhoneNum, setPhoneNumNumber] = useState(prevPhoneNum);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!Name.trim() || !Adrese.trim() || !PhoneNum.trim()) {
      setError("All fields are required. Please fill them out.");
      return false;
    }
    if (!/^\d+$/.test(PhoneNum)) {
      setError("Phone number must contain only numbers.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setError("");
      const updatedOrder = { dishName, dishImage, Name, Adrese, PhoneNum };
      addOrUpdateOrder(index, updatedOrder); 
      navigate("/my-orders"); 
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {dishName && dishImage ? (
        <>
          <h2>Place Your Order for {dishName}</h2>
          <img
            src={dishImage}
            alt={dishName}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          />
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <label>Full Name:</label>
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                required
                style={{ padding: "10px", margin: "10px", width: "300px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Address:</label>
              <input
                value={Adrese}
                onChange={(e) => setAdres(e.target.value)}
                type="text"
                placeholder="Enter your address"
                required
                style={{ padding: "10px", margin: "10px", width: "300px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Phone Number:</label>
              <input
                value={PhoneNum}
                onChange={(e) => setPhoneNumNumber(e.target.value)}
                type="tel"
                placeholder="Enter your phone number"
                required
                style={{ padding: "10px", margin: "10px", width: "300px" }}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#5cb85c",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit Order
            </button>
          </form>
        </>
      ) : (
        <h3>No dish selected.</h3>
      )}
    </div>
  );
}

export default Order;
