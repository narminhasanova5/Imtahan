import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/reducers/basketSlice";
import styles from "./Basket.module.scss"
const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);

  return (
    <div className={styles.basketContainer}>
      <h2 className={styles.basketTitle}>Your Basket</h2>
      {items.length === 0 ? (
        <p className={styles.emptyMessage}>No product in basket.</p>
      ) : (
        <div className={styles.basketList}>
          {items.map((item) => (
            <div key={item._id} className={styles.basketItem}>
              <img src={item.image} alt={item.product} className={styles.basketImage} />
              <p className={styles.basketProduct}>{item.name}</p>
              <p className={styles.basketPrice}>{item.price}</p>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(removeFromBasket(item._id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;