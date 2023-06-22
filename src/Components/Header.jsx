import React from "react";
import "../Styles/Header.css";
import UserIcon from "../assets/img/user-icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../Styles/customHooks/useAuth";
import { auth } from "../fireebase.js";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const Header = () => {
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.warning("logged sucessfully");
      })
      .catch((err) => {
        toast.danger("logged out sucessfully");
      });
  };

  return (
    <header className="container header" id="myheader">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="ri-shopping-bag-line"></i>
            <strong>Multimart</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <i className="ri-handbag-line">{totalQuantity}</i>
                </Link>
              </li>

              <li className="nav-item my-3">
                <div className="dropdown">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={UserIcon} alt="headerIcon" />
                  </button>
                  <ul className="dropdown-menu text-center my-5">
                    {/* <li className="fs-6">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="fs-6">
                      <Link to="/dashborad/all-products">Dashboard-add</Link>
                    </li>
                    <li className="fs-6">
                      <Link to="/dashborad/add-products">Dashboard-add</Link>
                    </li> */}
                    <li className="nav-item fs-6 mt-2 text-capitalize">
                      {currentUser ? (
                        currentUser.displayName
                      ) : (
                        <Link to="/login" className="nav-item fs-5">
                          Login
                        </Link>
                      )}
                    </li>
                    {currentUser ? (
                      <li className="nav-item" onClick={logout}>
                        <Link to="/" className="nav-link">
                          Logout
                        </Link>
                      </li>
                    ) : (
                      <h6 className="d-none">.</h6>
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
