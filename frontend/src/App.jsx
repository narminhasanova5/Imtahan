import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVegeFoodsThunk } from "../redux/reducers/vegefoodsSlice";
import { addToBasket } from "../redux/reducers/basketSlice";
import styles from "../src/assets/App.module.scss";
const App = () => {
  const dispatch = useDispatch();
  const vegefoods = useSelector((state) => state.vegefoods.vegefoods);
  const loading = useSelector((state) => state.vegefoods.loading);
  const error = useSelector((state) => state.vegefoods.error);

  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    dispatch(getVegeFoodsThunk());
  }, [dispatch]);

  const handleOrder = (item) => {
    dispatch(addToBasket(item));
    setOrderedItems([...orderedItems, item._id]);
  };

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error</span>;

  return (
    <div>
      <div className={styles.head2}>
        <h6>OUR OFFERS</h6>
        <h3>Our Products</h3>
        <h5>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </h5>
      </div>
      <div className={styles.product_container}>
        {vegefoods?.map((item) => (
          <div key={item._id} className={styles.product_card}>
            {item.image && (
              <img src={item.image} alt="" className={styles.product_image} />
            )}
            <h3 className={styles.product_name}>{item.name}</h3>
            <p className={styles.product_price}>{item.price}</p>

            <button
              onClick={() => handleOrder(item)}
              className={styles.order_button}
            >
              {orderedItems.includes(item._id) ? "Ordered" : "Order Now!"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
