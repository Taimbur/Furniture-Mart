import React, { useEffect, useState } from "react";
// import products from "../assets/data/Products.js";
import Furniture from "../assets/img/hero-img.png";
import "../Styles/Home.css";
import Service from "../Service/Service";
import Productlist from "../UI/Product-list";
import Banner from "../UI/Banner.jsx";
import useGetData from "../Styles/customHooks/useGetData.js";

const Home = () => {
  const { data: products, loading } = useGetData("products");
  const [data, setData] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [headphone, setHeadphone] = useState([]);
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterBestProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filternewProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterheadphoneProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterwatchProducts = products.filter(
      (item) => item.category === "watch"
    );
    setData(filteredProducts);
    setBestProducts(filterBestProducts);
    setMobileProducts(filternewProducts);
    setHeadphone(filterheadphoneProducts);
    setWatch(filterwatchProducts);
  }, [products]);

  const year = new Date().getFullYear();
  return (
    <>
      <div className="container my-5 h-banner">
        <section>
          <div className="row mx-auto my-5 home-sec">
            <div className="col-md-6 my-2">
              <p>Trending Product of {year}</p>
              <h3 className="text-uppercase">
                make your interor more minimalistic & modern
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                voluptatem repellendus eaque aliquam, vitae recusandae esse
                tenetur blanditiis sit est nisi quisquam earum eligendi amet
                accusamus, molestias quia, rem repudiandae?
              </p>
              <br />
              <button className="btn btn-dark">Show Now</button>
            </div>
            <div className="col-md-6">
              <img src={Furniture} alt="set" className="w-100 h-100" />
            </div>
          </div>
        </section>
      </div>
      <Service />
      {/* card section begin */}
      <section>
        <div className="container">
          <h1>New Products</h1>
          <div className="row text-center">
            {loading ? <h1>Loading...</h1> : <Productlist data={data} />}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Best Products</h1>
          <div className="row text-center">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <Productlist data={bestProducts} />
            )}
          </div>
        </div>
      </section>
      {/* banner section */}
      <section>
        <div className="container">
          <div className="row">
            <Banner />
          </div>
        </div>
      </section>
      {/* mobile section */}
      <section>
        <div className="container">
          <h1>New Arrival</h1>
          <div className="row">
            {/* {loading.length > 0 ? (
              <Productlist data={mobileProducts} />
            ) : (
              <h1>Loading...</h1>
            )} */}
            <Productlist data={mobileProducts} />
          </div>
        </div>
      </section>
      <section>
        {/* headphone sec */}
        <div className="container">
          <h1>Beast headphone</h1>
          <div className="row text-center">
            {/* {products.length > 0 ? (
          
            ) : (
              <h1>Loading...</h1>
            )} */}
            <Productlist data={headphone} />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Best Watch</h1>
          <div className="row text-center">
            {/* {products.length > 0 ? (
              <Productlist data={watch} />
            ) : (
              <h1>Loading...</h1>
            )} */}
            <Productlist data={watch} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
