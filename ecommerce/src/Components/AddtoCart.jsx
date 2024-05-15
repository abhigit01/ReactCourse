import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {removeFromCart} from '../redux/products/cartSlice'


const AddtoCart = () => {
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  
  const isPresentInCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (id === cart[i]) {
        return true;
      }
    }
    return false;
  }
  const HandleRemoveFromcart=(id)=>{
    dispatch(removeFromCart(id));
  }
  return (

    <div className="flex flex-col gap-4">
      <div className="product-view grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        { product
          ? product.map((item) => {
            return (
                isPresentInCart(item.id)
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
                  </div>
                  <div className=" flex flex-col gap-2 items-center">
                    <button className="bg-green-600 rounded w-28 " onClick={() => HandleRemoveFromcart(item.id)} >Remove From Cart</button>
                    <button className="bg-green-600 rounded w-28 " >Buy Now</button>
                  </div>
                </div>
                : null
            );
          })
          : <div>Helo</div>}
      </div>
    </div>
  );
};


export default AddtoCart
