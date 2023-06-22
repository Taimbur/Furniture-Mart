import React, { useEffect } from "react";
import "../Styles/Checkout.css";
import { useSelector } from "react-redux";
import Helmert from "../Components/Helmert/Helmert";

const Checkout = () => {
  const TotalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmert title="Checkout" />
      <div className="row r-1 my-4">
        <div className="col-75 c-75">
          <div className="container cr-1">
            <form>
              <div className="row">
                <div className="col-50 c-50">
                  <h3>Billing Address</h3>
                  <label>
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label>
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label>
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label>
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input type="text" name="city" placeholder="New York" />

                  <div className="row">
                    <div className="col-50 c-50">
                      <label>State</label>
                      <input type="text" name="state" placeholder="NY" />
                    </div>
                    <div className="col-50 c-50">
                      <label>Zip</label>
                      <input type="text" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-50 c-50">
                  <h3>Payment</h3>
                  <label>Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label>Name on Card</label>
                  <input
                    type="text"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label>Credit card number</label>
                  <input
                    type="text"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label>Exp Month</label>
                  <input type="text" name="expmonth" placeholder="September" />

                  <div className="row">
                    <div className="col-50 c-50">
                      <label>Exp Year</label>
                      <input type="text" name="expyear" placeholder="2018" />
                    </div>
                    <div className="col-50 c-50">
                      <label>CVV</label>
                      <input type="text" name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" />
                Shipping address same as billing
              </label>

              <div className="d-grid gap-2 col-6 mx-auto my-5">
                <button className="btn btn-dark" type="button">
                  Place Order Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-25 c-25">
          <div className="container">
            <h4>
              Cart
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>
              </span>
            </h4>
            <p>
              Total Qty <span>{TotalQty}</span>
            </p>
            <p>
              Subtotal <span>${totalAmount}</span>
            </p>
            <p>
              Shipping charge <span>0</span>
            </p>
            <hr />
            <p className="fs-2 fw-bold">
              Total &nbsp;
              <span className="price" style={{ color: "black" }}>
                <b>${totalAmount}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
