// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import React from 'react'; 
// import ReactDOM from 'react-dom/client'; 
// import App from './App';  
// import { BrowserRouter } from "react-router-dom";
// // import PcPage from './ex routage/pcpage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
  
// );


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
