import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import useGetData from "../Styles/customHooks/useGetData";
import { db } from "../fireebase";
import { toast } from "react-toastify";
const AllProducts = () => {
  const { data: productsData } = useGetData("products");

  const delPro = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Delete Succesful");
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" style={{ float: "left" }}>
                  Image
                </th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {productsData.length > 0 ? (
                productsData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ float: "left" }}>
                      <img
                        src={item.img}
                        alt="img"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.productName}</td>

                    <td>
                      <button
                        className="bg-danger text-white px-1"
                        onClick={() => {
                          delPro(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <td>
                  <h1 className="text-center fw-bold fsw-italic pt-5  ">
                    Loading...Products
                  </h1>
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
