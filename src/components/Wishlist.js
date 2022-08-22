import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "./redux/wishlist_redux";
import { FaTrashAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(wishlistAction.remove(id));
  };

  const deleteAll = (id) => {
    dispatch(wishlistAction.reset(id));
  };

  return (
    <div div className="container">
      {wishlist.length !== 0 ? (
        <>
          <table
            style={{
              width: "100%",
              margin: "30px 0",
              borderCollapse: "collapse",
            }}
          >
            <tr style={{ fontWeight: "bold", color: "white" }}>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Amount</th>
              {/* <th>Action</th> */}
            </tr>

            {wishlist.map((e, index) => {
              console.log(Wishlist);

              return (
                <tr key={index} style={{ fontWeight: "bold", color: "white" }}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>

                  <td>
                    <FaRupeeSign />
                    {e.price}
                  </td>

                  <td>
                    <FaRupeeSign />
                    {parseFloat(e.price) * parseFloat(e.amount)}
                  </td>
                  {console.log(e.amount)}

                  <td>
                    <FaTrashAlt
                      className="trash"
                      onClick={deleteItem.bind(this, e.id)}
                    ></FaTrashAlt>
                  </td>
                </tr>
              );
            })}
          </table>
          <button onClick={deleteAll}>Remove All</button>
        </>
      ) : (
        <p style={{ fontWeight: "bold", color: "white" }}>Empty Wishlist</p>
      )}
    </div>
  );
};

export default Wishlist;
