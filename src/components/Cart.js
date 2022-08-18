import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./redux/cart";
import { FaTrashAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

// const [total, setTotal] = useState(0);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const inc = (id) => {
    dispatch(cartAction.inc(id));
  };

  const dec = (id) => {
    dispatch(cartAction.dec(id));
  };

  const deleteItem = (id) => {
    dispatch(cartAction.remove(id));
  };

  const deleteAll = (id) => {
    dispatch(cartAction.reset(id));
  };

  return (
    <div div className="container">
      {cart.length !== 0 ? (
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

            {cart.map((e, index) => {
              console.log(cart);

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
                    <button onClick={dec.bind(this, e.id)}>-</button> {e.amount}{" "}
                    <button onClick={inc.bind(this, e.id)}>+</button>
                  </td>
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
          <h3 style={{ fontWeight: "bold", color: "white" }}>
            Grand Total :{" "}
            {cart.reduce((product, item) => product +( item.price * item.amount), 0)}
          </h3>
        </>
      ) : (
        <p style={{ fontWeight: "bold", color: "white" }}>Empty Cart</p>
      )}
    </div>
  );
};

export default Cart;
