import { useDispatch } from "react-redux";
import NavbarECom from "./NavbarECom";
import React, { useEffect, useState } from "react";
import { addProduct } from "./redux/products/productSlice";
import { FaRegHeart } from "react-icons/fa";
const HomePage = () => {
  const [ecommerce, setEcommerce] = useState();
  const dispatch = useDispatch();
  const fetchEcommerce = async () => {
    try {
      const url = "https://dummyjson.com/products";
      const responce = await fetch(url);
      if (!responce.ok) {
        throw new Error("network is not okay");
      }
      const data = await responce.json();
      setEcommerce(data.products);
      dispatch(addProduct(data.products));
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  useEffect(() => {
    fetchEcommerce();
  }, []);
  console.log(ecommerce);
  return (
    <div className="flex flex-col gap-4">
      <NavbarECom />
      <div className="product-view grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ecommerce && ecommerce.length
          ? ecommerce.map((item) => {
            return (
              <div className="product-card w-76 px-4 py-4 shadow-lg flex flex-col items-center justify-center gap-3" key={item.id}>
                <div className="img-box w-56 h-60">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="object-contain cursor-pointer"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-col justify-center">
                    <p className="title">{item.title}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <p><FaRegHeart /></p>
                 
                </div>
              </div>
            );
          })
          : null}
      </div>
    </div>
  );
};

export default HomePage;
