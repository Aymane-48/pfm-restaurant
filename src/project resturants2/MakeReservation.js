import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MakeReservation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: state?.reservation?.name || "",
    email: state?.reservation?.email || "",
    date: state?.reservation?.date || "",
    time: state?.reservation?.time || "",
    guests: state?.reservation?.guests || 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    if (state?.index !== undefined) {
      reservations[state.index] = formData;
    } else {
      reservations.push(formData);
    }

    localStorage.setItem("reservations", JSON.stringify(reservations));
    navigate("/my-orders");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>
        Make a Reservation
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <label style={{ display: "block", marginBottom: "10px" }}>
          <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Name:
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Email:
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Date:
          </span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Time:
          </span>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "20px" }}>
          <span style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Number of Guests:
          </span>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px 15px",
            backgroundColor: "#3498db",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default MakeReservation;
