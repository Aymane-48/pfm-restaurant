import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyOrders({ orders, deleteOrder }) {
  const navigate = useNavigate();
  
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOrders = orders.filter(
    (order) =>
      order.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteReservation = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    navigate("/my-orders");
  };

  const modifyReservation = (index) => {
    navigate("/reservation", { state: { reservation: reservations[index], index } });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Orders and My Reservation</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search reservations or orders"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          margin: "20px 0",
          width: "80%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      
      {/* Filtered Reservations */}
      {filteredReservations.length > 0 ? (
        filteredReservations.map((reservation, index) => (
          <div
            key={index}
            style={{
              border: "2px solid #4CAF50",
              padding: "15px",
              margin: "20px 0",
              borderRadius: "8px",
              backgroundColor: "#e8f5e9",
            }}
          >
            <h3>Reservation for {reservation.name}</h3>
            <p><strong>Email:</strong> {reservation.email}</p>
            <p><strong>Date:</strong> {reservation.date}</p>
            <p><strong>Time:</strong> {reservation.time}</p>
            <p><strong>Guests:</strong> {reservation.guests}</p>
            
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => deleteReservation(index)}
                style={{
                  margin: "5px",
                  padding: "5px 10px",
                  backgroundColor: "white",
                  color: "red",
                }}
              >
                Delete Reservation
              </button>
              <button
                onClick={() => modifyReservation(index)}
                style={{
                  margin: "5px",
                  padding: "5px 10px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Modify Reservation
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No reservations match your search.</p>
      )}

      {/* Filtered Orders */}
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{order.Name}</h3>
            <p><strong>Dish:</strong> {order.dishName}</p>
            <p><strong>Address:</strong> {order.Adrese}</p>
            <p><strong>Phone Number:</strong> {order.PhoneNum}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>
  Your order will be delivered soon to {order.Adrese}.
</p>

            <img
              src={order.dishImage}
              alt={order.dishName}
              style={{
                width: "150px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <button
              onClick={() => deleteOrder(index)}
              style={{
                margin: "5px",
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Delete
            </button>
            <Link
              to="/order"
              state={{ ...order, index }}
            >
              <button
                style={{
                  margin: "5px",
                  padding: "5px 10px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Modify
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p>No orders match your search.</p>
      )}
    </div>
  );
}

export default MyOrders;
