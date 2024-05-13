import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarECom = () => {
  return (
    <>
      <div className=" w-full min-h-16 bg-gray-900 flex  items-center justify-around text-lg">
        <div className="websitename text-white ">XYZ.com</div>
        <div className="location flex items-center gap-5">
          <div className="location-icon text-white ">
            <FaLocationDot />
          </div>
          <div className="updatelocation flex flex-col">
            <p className="text-white ">Delivering To Noida 201308</p>
            <p className="text-white ">Update Location</p>
          </div>
        </div>
        <div className="searchbar flex gap-8 items-center ">
          <div className="select">
            <select>
              <option value="">All</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="searchtext">
            <input type="text" className="w-96 min-h-8" />
          </div>
          <div className="container text-white">
            <IoMdSearch />
          </div>
        </div>
        <div className="wishlist text-white cursor-pointer"><p> <Link to="/Wishlist"> <FaRegHeart /> </Link> </p></div>
        <div className="cart text-white cursor-pointer">
        <p> <Link to="/addtocart"> <FiShoppingCart /> </Link> </p>
          
        </div>
      </div>
    </>
  );
};

export default NavbarECom;
