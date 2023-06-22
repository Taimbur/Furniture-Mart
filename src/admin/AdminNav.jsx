import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/img/user-icon.png";
import "../Styles/Header.css";
const AdminNav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "200px" }}
          >
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 srch"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="ri-search-line  fw-bold  fs-4 srch"></i>
                  </button>
                </form>
              </div>
            </nav>

            <ul className="navbar-nav me-auto mb-2 gap-5 ">
              <li className="nav-item">
                <i className="ri-notification-line nav-link"></i>
              </li>
              <li className="nav-item">
                <i className="ri-settings-2-line nav-link"></i>
              </li>
              <li className="nav-item my-3">
                <img src={userIcon} alt="icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container d-flex  text-white justify-content-center ad-1 ">
        <div className="row my-4  ">
          <div className="col">
            <span>
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </div>
          <div className="col ">
            <span>
              <Link to="/dashboard/all-products">Products</Link>
            </span>
          </div>
          <div className="col ">
            <span>Orders</span>
          </div>
          <div className="col ">
            <span>
              <Link to="/dashboard/user">Users</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
