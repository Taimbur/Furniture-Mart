import React from "react";
import CommanSection from "../UI/CommanSection";
import Helmert from "../Components/Helmert/Helmert";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/Slices/CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <Helmert title="cart" />
      <CommanSection title="Cart" />
      {cartItems.length === 0 ? (
        <h2 className="text-center fs-1 fw-bold fst-italic pt-5">
          Empty Card <i className="ri-emotion-sad-line"></i>
        </h2>
      ) : (
        <section>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 fs-5 ">
                <table className="table text-center text-capitalize">
                  <thead className="fw-bold  fs-4">
                    <tr>
                      <td></td>
                      <td>title</td>
                      <td>price</td>
                      <td>quantity</td>
                      <td>delete</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 &&
                      cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 text-center fw-bold text-capitalize pt-2">
                <h2 className="fs-1 fw-bold">subtotal</h2>
                <span>${totalAmount}</span>
                <p className="pt-4 fw-normal">
                  taxes and shipping will calculate in checkout
                </p>

                <div className="d-flex justify-content-center mb-5 pt-5">
                  <div className="p-2">
                    <button className="btn btn-dark">
                      <Link to="/shop"> Continue Shopping</Link>
                    </button>
                  </div>
                  <div className="p-2">
                    <button className="btn btn-dark">
                      <Link to="/checkout"> Checkout</Link>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.removeItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="img" className="w-100 h-100" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td onClick={deleteProduct}>
        <i className="ri-delete-bin-line text-danger fs-5"></i>
      </td>
    </tr>
  );
};

export default Cart;
