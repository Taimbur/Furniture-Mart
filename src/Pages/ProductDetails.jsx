import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useGetData from "../Styles/customHooks/useGetData.js";
import CommanSection from "../UI/CommanSection.jsx";
import Helmert from "../Components/Helmert/Helmert";
import Productlist from "../UI/Product-list";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";
import { db } from "../fireebase.js";
import { getDoc, doc } from "firebase/firestore";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [rating, setRating] = useState();
  const { id } = useParams();

  const { data: products } = useGetData("products");

  const docRef = doc(db, "products", id);
  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product");
      }
    };
    getProduct();
  }, []);

  const { productName, price, imgUrl, desc, shortdesc, category } = product;

  const realtedProducts = products.filter((item) => item.category === category);
  const reviewUsr = useRef("");
  const reviewMsg = useRef("");

  const reviewHandle = (e) => {
    e.preventDefault();
    const Name = reviewUsr.current.value;
    const Msg = reviewMsg.current.value;
    const revObj = {
      User: Name,
      Review: Msg,
      Rating: rating,
    };
    console.log(revObj);
    toast.success("Review added succesfully");
  };

  const AddtoCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        imgUrl: imgUrl,
      })
    );

    toast.success("Product added succesfully");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <div className="container ">
        <CommanSection className="h-50" />
      </div>

      <section className="pt-5 container">
        <Helmert title={productName} />
        <div className="row">
          <div className="col-md-6">
            <img src={imgUrl} alt="img" className="h-100 w-100" />
          </div>
          <div className="col-md-6 pt-5">
            <div className="card text-center  h-100 w-100 ">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <h1 className="fst-italic fw-bold text-capitalize">
                      {productName}
                    </h1>
                  </li>
                </ul>
              </div>
              <div className="card-body text-center">
                <div className="d-flex flex-row-reverse bd-highlight">
                  <div className="p-2 bd-highlight">
                    <p className=" text-warning">
                      <b className="text-dark fw-bold fst-italic ">
                        {/* ({parseInt(avgRating)}.Rating){" "} */}
                      </b>
                      <i className="ri-star-smile-line"></i>
                      <i className="ri-star-smile-line"></i>
                      <i className="ri-star-smile-line"></i>
                      <i className="ri-star-smile-line"></i>
                      <i className="ri-star-smile-line"></i>
                    </p>
                  </div>
                </div>
                <h5 className="card-title pt-5 fw-bold fst-italic">${price}</h5>
                <p className="card-text pt-4  ">{shortdesc}</p>
              </div>
              <button
                type="button"
                className="btn btn-dark btn-lg text-uppercase"
                onClick={AddtoCart}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-5 contianer">
          <div className="row pt-5 gap-5">
            <div className="col-md-4">
              <h4 className="fw-bold fst-italic pb-5">Description</h4>
              <p className="">{desc}</p>
            </div>

            <div className="col-md-4">
              <h4 className="text-center mx-5 fst-italic fw-bold">Reviews</h4>

              {/* {pro.reviews.length > 1 &&
                      pro.reviews.map((item, index) => (
                        <>
                          <h6 className="pt-4">Sahil</h6>
                          <span className="pt-" key={index}>
                            {item.rating}.
                            <i className="ri-star-line text-warning fs-5 fw-5"></i>
                            (Rating)
                          </span>
                          <p className="pt-2">{item.text}</p>
                        </>
                      ))} */}
              <form className="row g-3 my-5">
                <h4 className="fw-5 text-uppercase">
                  leave your comments here...
                  <i className="ri-chat-smile-line"></i>
                </h4>
                <div className="col-auto h-100 w-100">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Enter Name"
                    ref={reviewUsr}
                  />
                </div>

                <div className="form-floating mb-3 h-100 w-100 ">
                  <p className=" d-flex gap-2 pb-4 fs-5">
                    <span className="fs-5 fw-5 text-dark">
                      1
                      <i
                        className="ri-star-line text-warning"
                        onClick={() => setRating("1")}
                      ></i>
                    </span>
                    <span className="fs-5 fw-5 text-dark">
                      2
                      <i
                        className="ri-star-line text-warning"
                        onClick={() => setRating("2")}
                      ></i>
                    </span>
                    <span className="fs-5 fw-5 text-dark">
                      3
                      <i
                        className="ri-star-line text-warning"
                        onClick={() => setRating("3")}
                      ></i>
                    </span>
                    <span className="fs-5 fw-5 text-dark">
                      4
                      <i
                        className="ri-star-line text-warning"
                        onClick={() => setRating("4")}
                      ></i>
                    </span>
                    <span className="fs-5 fw-5 text-dark">
                      5
                      <i
                        className="ri-star-line text-warning"
                        onClick={() => setRating("5")}
                      ></i>
                    </span>
                  </p>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    ref={reviewMsg}
                  ></textarea>
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-dark mb-3"
                    onClick={reviewHandle}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <h2 className="text-capitalize fst-italic">
              you may also like this
            </h2>
            <Productlist data={realtedProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
