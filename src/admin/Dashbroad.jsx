import React from "react";
import useGetData from "../Styles/customHooks/useGetData";

const Dashbroad = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section>
      <div className="container">
        <div className="row gap-2 pt-4">
          <div className="col text-center text-capitalize bg-success">
            <h4 className="text-white">total sale</h4>
            <p className="text-white">786</p>
          </div>
          <div className="col text-center text-capitalize bg-success">
            <h4 className="text-white">Orders</h4>
            <p className="fs-2">
              <i className="ri-shopping-cart-line"></i>786
            </p>
          </div>

          <div className="col text-center text-capitalize bg-success text-white">
            <h4>total products</h4>
            <p className="fs-2">
              <i className="ri-money-dollar-circle-line"></i>
              {products.length}
            </p>
          </div>
          <div className="col text-center text-capitalize bg-success text-white">
            <h4>total user</h4>

            <p className="fs-2">
              <i className="ri-user-6-line"></i>
              {users.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashbroad;
