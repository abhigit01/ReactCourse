import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { addToProduct } from './redux/products/productSlice'
import { addToCart } from "./redux/products/cartSlice";
import { addToWishlist } from "./redux/products/wishlistSlice";
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
      dispatch(addToProduct(data.products));
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  useEffect(() => {
    fetchEcommerce();
  }, []);


  const HandleAddToCart = (id) => {
    dispatch(addToCart(id));

  }
  const HandleWishlist = (id) => {
    dispatch(addToWishlist(id));

  }
  return (
    <div className="flex flex-col gap-4">

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
                    <p className="title flex justify-center items-center">{item.title}</p>
                    <p className="price flex justify-center items-center">{item.price}</p>
                  </div>
                  <div className=" flex flex-col gap-2 items-center">
                    <button className="bg-green-600 rounded w-28 cursor-default " onClick={() => HandleAddToCart(item.id)}>Add to Cart</button>
                    <button className="bg-green-600 rounded w-28 cursor-pointer ">Buy Now</button>
                    <button className=" rounded w-8 flex items-center cursor-pointer" onClick={() => HandleWishlist(item.id)} ><FaRegHeart /></button>
                  </div>
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
