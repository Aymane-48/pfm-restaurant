import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import backgroundImg from "../project resturants2/images/restaurant.jpg";

function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: "Chicken Pizza",
      image: require("../project resturants2/images/Chicken Pizza.avif"),
      description: "Delicious chicken pizza with fresh ingredients.",
      offer: "50% Off",
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      image: require("../project resturants2/images/Spaghetti Pasta.avif"),
      description: "Classic spaghetti with a rich Bolognese sauce.",
      offer: "20% Off",
    },
    {
      id: 3,
      name: "Biryani",
      image: require("../project resturants2/images/Biryani.jpg"),
      description: "Juicy Biryani with fresh vegetables and fries.",
      offer: "30% Off",
    },
  ];

  // const restaurantImage = require("../project resturants2/images/restaurant.jpg");

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Carousel Section */}
      <Carousel style={{ width: "100%", margin: "0 auto" }}>
        {featuredDishes.map((dish) => (
          <Carousel.Item key={dish.id} style={{ position: "relative" }}>
            <img
              className="d-block w-100"
              src={dish.image}
              alt={dish.name}
              style={{
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(255, 87, 34, 0.9)",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "5px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {dish.offer}
            </div>
            <Carousel.Caption>
              <h3 style={{ fontSize: "1.9rem", fontWeight: "700", color: "#2c3e50" }}>
                {dish.name}
              </h3>
              <p style={{ fontSize: "1.4rem", color: "#fff" }}>{dish.description}</p>
              <Link
                to="/order"
                state={{ dishName: dish.name, dishImage: dish.image }}
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                >
                  Order Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Customer Testimonials Section */}
      <section
        style={{
          backgroundColor: "#f1f1f1",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "30px" }}>
          What Our Customers Say
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              name: "John Doe",
              review: "Amazing food and great ambiance! Highly recommend.",
              image: require("../project resturants2/images/John Doe.jpeg"),
            },
            {
              name: "Sandra Smith",
              review: "Best pizza I've ever had. The service was fantastic!",
              image: require("../project resturants2/images/Sandra Smith.jpeg"),
            },
            {
              name: "Alex Johnson",
              review: "A delightful dining experience. Will definitely come back!",
              image: require("../project resturants2/images/Alex Johnson.jpeg"),
            },
          ].map((customer, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                margin: "20px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={customer.image}
                alt={customer.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <p style={{ fontStyle: "italic", color: "#555" }}>{customer.review}</p>
              <h4 style={{ color: "#333" }}>{customer.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section
        style={{
          backgroundColor: "#ff5722",
          color: "#fff",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Special Offers</h2>
        <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
          Don't miss out on our exclusive deals!
        </p>
        <Link to="/offers">
          <button
            style={{
              backgroundColor: "#fff",
              color: "#ff5722",
              padding: "10px 20px",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            View Offers
          </button>
        </Link>
      </section>

      {/* Events and Reservations Section */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#2c3e50",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Events & Reservations</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Join us for special events or reserve your table now!
        </p>
        <Link to="/events">
          <button
            style={{
              backgroundColor: "#ff5722",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            View Events
          </button>
        </Link>
        <Link to="/reservation">
          <button
            style={{
              backgroundColor: "#2ecc71",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Make a Reservation
          </button>
        </Link>
      </section>

      {/* Newsletter Section */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
          Stay Updated
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "300px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#ff5722",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <p style={{ margin: "0", fontSize: "1rem" }}>
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
        </p>
        <p style={{ margin: "10px 0 0", fontSize: "0.9rem" }}>
          Follow us on:
          <a href="#" style={{ color: "#ff5722", textDecoration: "none", marginLeft: "10px" }}>
            Facebook
          </a>
          |
          <a href="#" style={{ color: "#ff5722", textDecoration: "none", marginLeft: "10px" }}>
            Instagram
          </a>
          |
          <a href="#" style={{ color: "#ff5722", textDecoration: "none", marginLeft: "10px" }}>
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
