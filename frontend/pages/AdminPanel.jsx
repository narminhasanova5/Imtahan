import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVegeFoodsThunk,
  deleteVegeFoodsThunk,
} from "../redux/reducers/vegefoodsSlice";
import styles from "./AdminPanel.module.scss"
const AdminPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.vegefoods.vegefoods);

  useEffect(() => {
    dispatch(getVegeFoodsThunk());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteVegeFoodsThunk(id));
  };

  return (
    <div className={styles.adminContainer}>
      <h2 className={styles.adminTitle}>Admin Panel</h2>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>  
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;