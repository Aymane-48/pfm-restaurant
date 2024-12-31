import React from "react";
import { useLocation, Link } from "react-router-dom";

function AboutUs() {
  const location = useLocation();
  const event = location.state?.event;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
          background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0" }}>About Us</h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Dedicated to bringing you the best food experience!
        </p>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          padding: "40px",
        }}
      >
        {/* Speedy Delivery */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <img
            src={require("../project resturants2/images/fast delivery.avif")}
            alt="Fast Delivery"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Speedy Delivery</h2>
          <p>Get your orders delivered to your doorstep in record time!</p>
        </div>

        {/* Available All Week */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <img
            src={require("../project resturants2/images/Available All Week.avif")}
            alt="Available All Week"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Available All Week</h2>
          <p>Serving you every day, including weekends and holidays.</p>
        </div>

        {/* Customer Support */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <img
            src={require("../project resturants2/images/Customer Support.avif")}
            alt="Customer Support"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Customer Support</h2>
          <p>24/7 support to assist you with any inquiries or issues.</p>
        </div>
      </div>

      {/* Event Details Section */}
      {event && (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", color: "#ff5722" }}>{event.name}</h2>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>{event.date}</p>
          <p style={{ fontSize: "1rem", color: "#777" }}>{event.description}</p>
          <img
            src={event.image}
            alt={event.name}
            style={{ width: "80%", borderRadius: "10px", margin: "20px 0" }}
          />
        </div>
      )}

      {/* Call-to-Action Section */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          background: "linear-gradient(to right, #84fab0, #8fd3f4)",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Join Us Today!</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Experience the best service and delicious food at our restaurant.
        </p>
        <Link to="/menu">
          <button
            style={{
              backgroundColor: "#ff6f61",
              color: "#fff",
              padding: "15px 30px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Explore Our Menu
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p style={{ margin: "0" }}>
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p style={{ marginTop: "5px" }}>
          Follow us on{" "}
          <a href="https://www.facebook.com" style={{ color: "#0d6efd", textDecoration: "none" }}>
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://www.twitter.com" style={{ color: "#0d6efd", textDecoration: "none" }}>
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com" style={{ color: "#0d6efd", textDecoration: "none" }}>
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}

export default AboutUs;
