import React, { useState } from "react";
import CommanSection from "../UI/CommanSection";
import "../Styles/Shop.css";

import ProductList from "../UI/Product-list";
import Helmert from "../Components/Helmert/Helmert";
import useGetData from "../Styles/customHooks/useGetData";

const Shop = () => {
  const { data: Products } = useGetData("products");

  const [productData, setProductData] = useState();
  const search = (e) => {
    const searchVale = e.target.value;
    const searchPro = Products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchVale.toLocaleLowerCase())
    );
    setProductData(searchPro);
  };

  const handelFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = Products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "chair") {
      const chairProducts = Products.filter(
        (item) => item.category === "chair"
      );
      setProductData(chairProducts);
    }
    if (filterValue === "watch") {
      const chairProducts = Products.filter(
        (item) => item.category === "watch"
      );
      setProductData(chairProducts);
    }
    if (filterValue === "mobile") {
      const chairProducts = Products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(chairProducts);
    }
    if (filterValue === "wireless") {
      const chairProducts = Products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(chairProducts);
    }
  };
  return (
    <>
      <div className="container">
        <Helmert title="shop" />
        <CommanSection title="Product" />
      </div>

      <section>
        <div className="container my-5">
          <div className="row gap-2">
            <div className="col-3">
              <div className="custom-select gap-5" style={{ width: "200px" }}>
                <select onChange={handelFilter}>
                  <option value="0">Select By Category:</option>
                  <option value="sofa">Sofa</option>
                  <option value="watch">Watch</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">chair</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </div>
            <div className="col-3 pt-0 ">
              <div className="custom-select gap-5" style={{ width: "200px" }}>
                <select onChange={handelFilter}>
                  <option value="0">Sort By :</option>
                  <option value="sofa">Sofa</option>
                  <option value="watch">Watch</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">chair</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </div>
            <div className="col-3 pt-0 search">
              <form action="" className="search-bar">
                <input
                  type="search"
                  name="search"
                  pattern=".*\S.*"
                  required
                  onChange={search}
                />
                <button className="search-btn" type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {productData?.length === 0 ? (
              <h1 className="text-center my-5">
                No Product Found<i class="ri-emotion-sad-line"></i>
              </h1>
            ) : (
              <ProductList data={productData} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
