import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import {removeFromWishlist} from '../redux/products/wishlistSlice'

const Wishlist = () => {
  const wishlist = useSelector((state)=>state.wishlist);
  const product = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  const isPresentInWishlist = (id) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (id === wishlist[i]) {
        return true;
      }
    }
    return false;
  }
  const HandRemoveWishlist = (id) => {
    dispatch(removeFromWishlist(id));

  }
  return (

    <div className="flex flex-col gap-4">
      <div className="product-view grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        { product
          ? product.map((item) => {
            return (
                isPresentInWishlist(item.id)
                ?
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
                    <button className="bg-red-600 rounded w-22 min-h-8 text-white" onClick={() => HandRemoveWishlist(item.id)} >Remove From Wishlist</button>
                  </div>
                  </div>
                </div>
                : null
            );
          })
          :<div>Helo</div>}
      </div>
    </div>
  );
};


export default Wishlist

