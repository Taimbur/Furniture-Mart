import React from "react";
import useGetData from "../Styles/customHooks/useGetData";
import { db } from "../fireebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const User = () => {
  const { data: userData } = useGetData("users");

  const delUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
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
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ float: "left" }}>
                      <img
                        src={item.img}
                        alt="img"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>{item.email}</td>

                    <td>{item.displayName}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          delUser(item.uid);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <h1 className="text-center fw-bold fsw-italic pt-5 ">
                      Loading...
                    </h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default User;
