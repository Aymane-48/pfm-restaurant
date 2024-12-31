// import Blog from './routage/Blog';
// import Home from './routage/Home';
// import About from './routage/about';



// import React, { Component } from 'react'; 
// import { Routes, Route, Link } from 'react-router-dom';
// import Users from './ex_routage/api';
// import User from './ex_routage/Single_user';
// import { Route, Routes } from 'react-router-dom';
// class App extends Component {
//     // let branshe1={name:"204",filere:"dev"}
//     // let branshe2={name:"205",filere:"ges"}
//     // let branshe3={name:"206",filere:"id"}
//     // let brc=[branshe1,branshe2,branshe3]
//     render(){
//     return (
//     <div>
//         {/* <h1>hello</h1> */}
//         {/* <Param brc={brc}/> */}
//         {/* <Classparam brc={brc}/> */}
//         {/* <Element brc={brc}/> */}

//         <div>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/blog">Blog</Link></li>
//     </ul>
// <div className="main-route-place">
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//     </Routes>
// </div>

// </div>
//     </div>
//   );
// }
// }

//PROJECT*******************************************************
// function App(){
//   return (
//     <div>
//         {/* <h1>hello</h1> */}
//         {/* <Param brc={brc}/> */}
//         {/* <Classparam brc={brc}/> */}
//         {/* <Element brc={brc}/> */}

//         <div>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">Persone</Link></li>
//     </ul>
// <div className="main-route-place">
//     <Routes>
//         <Route path="/" element={<Homme />} />
//         <Route path="/about" element={<Persone />} />
//     </Routes>
// </div>

// </div>
//     </div>
//   );
// }


// import axios from "axios";
// import { useState,useEffect } from "react";
// function App() {

//     const [users,setUsers]=useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response)=>(setUsers(response.data)))
//     },[])

//   return (
//     // <Users/>
//     <Routes>
//         <Route path="/" element={<Users user={users}/>} />
//         <Route path="/Single_user/:id" element={<User user={users}/>} />
//     </Routes>
//   );
// }

// function App() {
//   let branshe={name:"204",filere:"dev"}
//   return (
//     <div>
//         <h1>hello</h1>
//         <Param brc={branshe}/>
//     </div>
//   );
// }

// methode 2

// function App() {
//   return (
//     <div>
//         <h1>hello</h1>
//         <Param name="204" filere="dev"/>
//     </div>
//   );
// }

// methode 3

// function App() {
//   return (
//     <div>
//         <h1>hello</h1>
        // <Param name="204" filere="dev"/>
//     </div>
//   );
// }
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from './project chat gbt/HomePage';
// import CitiesPage from './project chat gbt/CitiesPage';
// import WeatherDetails from './project chat gbt/WeatherDetails';
// import "./project chat gbt/App.css"

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/cities/:state" element={<CitiesPage />} />
//       <Route path="/weather/:city" element={<WeatherDetails />} />
//     </Routes>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SearchCountry from './project chat gbt2/SearchCountry';
// import CitiesPage from "./project chat gbt2/CitiesPage";
// import WeatherDetails from "./project chat gbt2/WeatherDetails";

// function App() {
//   return (
//     // <Router>
//       <Routes>
//         <Route path="/" element={<SearchCountry />} />
//         <Route path="/cities/:country" element={<CitiesPage />} />
//         <Route path="/weather/:city" element={<WeatherDetails />} />
//       </Routes>
//     // </Router>
//   );
// }

// export default App;

// import HomePage from './project/HomePage';
// import CitiesPage from './project/CitiesPage';
// import WeatherDetails from './project/WeatherDetails';


// function App(){
//   return(
//     <div>
//       <Routes>
//           <Route path="/" element={<HomePage/>}></Route>
//           <Route path="/cities/:state" element={<CitiesPage/>}></Route>
//           <Route path="/weather/:city" element={<WeatherDetails/>}></Route>
//       </Routes>
//     </div>
//   )
// }
// export default App
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./project resturants/Home";
// import RestaurantMenu from "./project resturants/RestaurantMenu";
// import "./project resturants/index.css"





//***************PROJECT **********************

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./project resturants2/Home";
import Menu from "./project resturants2/Menu";
import Order from "./project resturants2/Order";
import MyOrders from "./project resturants2/MyOrders";
import RecipeDetails from "./project resturants2/RecipeDetails";
import Review from "./project resturants2/Review";
import ReviewRestaurant from "./project resturants2/ReviewRestaurant";
import AboutUs from "./project resturants2/AboutUs";
import MakeReservation from "./project resturants2/MakeReservation";
import ViewEvents from "./project resturants2/ViewEvents";
import ViewOffers from "./project resturants2/ViewOffers";


function App() {
  const [orders, setOrders] = useState([]); 

  const addOrUpdateOrder = (index, updatedOrder) => {
    if (index !== null && index !== undefined) {
      const newOrders = [...orders];
      newOrders[index] = updatedOrder;
      setOrders(newOrders);
    } else {
      setOrders([...orders, updatedOrder]);
    }
  };

  const deleteOrder = (index) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
  };

  return (
      <div>
        <header
                style={{
                  width: "100%",
                  padding: "20px 40px",
                  backgroundColor: "#343a40",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/">
                  <img
                    src={require("./project resturants2/images/logo.avif")}
                    alt="Restaurant Logo"
                    style={{ height: "50px", marginRight: "15px",borderRadius:"25px" }}
                  />
                  </Link>
                  <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.8rem", margin: 0 }}>
                    Golden Fork
                  </h1>
                </div>
                <nav>
                  
                  {/* <Link to="/" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>Home</Link> */}
                  <Link to="/menu" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>Menu</Link>
                  <Link to="/review-restaurant" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>Review Restaurant</Link>
                  <Link to="/my-orders" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>My Orders $ Reservation</Link>
                  <Link to="/about-us" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>About Us</Link>

                </nav>
              </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/review-restaurant" element={<ReviewRestaurant />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/order"
            element={<Order addOrUpdateOrder={addOrUpdateOrder} />}
          />
          <Route
            path="/my-orders"
            element={
              <MyOrders
                orders={orders}
                deleteOrder={deleteOrder}
              />
            }
          />
          <Route path="/reservation" element={<MakeReservation />} />
          <Route path="/events" element={<ViewEvents />} />
          <Route path="/offers" element={<ViewOffers />} />
        </Routes>
        
      </div>
  );
}

export default App;

// ***************PROJECT **********************




// import { Route, Routes } from "react-router-dom";
// import Login from "./mein Projekt/Login";
// import Home from "./mein Projekt/Home";
// import Menu from "./mein Projekt/Menu";
// import RecipeDetails from "./mein Projekt/RecipeDetails";
// import Order from "./mein Projekt/Order";
// import MyPurchase from "./mein Projekt/MyPurchase";


// function App(){
//   return(
//     <div>
//       <Routes>
//         <Route path="/" element={<Login/>}></Route>
//         <Route path="/home" element={<Home/>}></Route>
//         <Route path="/menu" element={<Menu/>}></Route>
//         <Route path="/recipe-details" element={<RecipeDetails/>}></Route>
//         <Route path="/order" element={<Order/>}></Route>
//         <Route path="/myPurchase" element={<MyPurchase/>}></Route>
//       </Routes>
//     </div>
//   )
// }export default App;
