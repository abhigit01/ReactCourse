import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Wishlist from "./Components/Wishlist";
import AddtoCart from "./Components/AddtoCart";
import NavbarECom from "./NavbarECom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavbarECom />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Wishlist" element ={<Wishlist/>}></Route>
          <Route path="/addtocart" element ={<AddtoCart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
