import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../fireebase.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navi = useNavigate();
  const [productName, setProductName] = useState("");
  const [shortdesc, setShortdesc] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const AddPro = async (e) => {
    e.preventDefault();

    try {
      const storagee = collection(db, "products");
      const storageRef = ref(storage, `PImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        },
        (error) => {
          // Handle unsuccessful uploads
          toast.warning(error.message);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(storagee, {
              productName: productName,
              shortdesc: shortdesc,
              desc: desc,
              category: category,
              price: price,
              imgUrl: downloadURL,
            });

            console.log("File available at", downloadURL);
          });
        }
      );
      toast("Product added succesfully", {
        position: toast.POSITION.TOP_RIGHT,
        className: "foo-bar",
      });
      navi("/dashboard");
    } catch (error) {
      toast.warning(error.message);
    }
  };

  return (
    <section>
      <div className="container my-5">
        <h1>Add Product</h1>
        <form className="was-validated" onSubmit={AddPro}>
          <div className="mb-3">
            <label className="form-label text-danger"> Products Name</label>
            <input
              type="text"
              className="form-control is-invalid"
              required
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-danger">Short Description</label>
            <input
              type="text"
              className="form-control is-invalid"
              required
              onChange={(e) => setShortdesc(e.target.value)}
              value={shortdesc}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-danger">Description</label>
            <textarea
              className="form-control is-invalid"
              required
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
          </div>

          <div className="mb-3 d-flex justify-content-around gap-4">
            <input
              type="text"
              className="form-control is-invalid w-50"
              required
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <select
              className="form-select"
              required
              aria-label="select example"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">Choose Category</option>
              <option value="chair">Chair</option>
              <option value="sofa">Sofa</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label text-danger">Product Image</label>
            <input
              type="file"
              className="form-control"
              aria-label="file example"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
