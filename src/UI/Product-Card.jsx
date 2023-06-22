import React from "react";
import "../UI/Product-Card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/Slices/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added succesfully");
  };
  return (
    <div className="col-3">
      <div className="page-wrapper my-0 ">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <Link to={`/shop/${item.id}`}>
                <div className="box-up">
                  <img src={item.imgUrl} alt="set" className="w-100 h-100" />

                  <div className="img-info">
                    <div className="info-inner">
                      <strong className="p-company">{item.productName}</strong>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>
                <p className="cart" onClick={addToCart}>
                  <span className="price">${item.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
