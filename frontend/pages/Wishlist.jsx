import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/reducers/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  
  return (
    <div >
      <h2 >Your Wishlist</h2>
      
      {items.length === 0 ? (
        <p>Your wishlist is empty </p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item._id}>
              <img 
                src={item.image} 
                alt={item.name} 
              />
              <div >
                <p >{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(item._id))}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;