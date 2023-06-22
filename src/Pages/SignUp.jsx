import React, { useState } from "react";
import Helmert from "../Components/Helmert/Helmert";
import "../Styles/Login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, db } from "../fireebase.js";
import { storage } from "../fireebase.js";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navi = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCrendential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCrendential.user;
      const strgRef = ref(storage, `images/${Date.now() + userName}`);
      const upldTsk = uploadBytesResumable(strgRef, file);

      upldTsk.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(upldTsk.snapshot.ref).then(async (downloadUrl) => {
            //update user profile
            await updateProfile(user, {
              displayName: userName,
              // photoURL: downloadUrl,
            });

            // store user info  db
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              // photoURL: downloadUrl,
            });
          });
        }
      );
      toast.success("Account Created Succesfully");
      setLoading(false);
      navi("/login");
    } catch (error) {
      toast.error("oops something went wrong!");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Helmert title="SignUp" />
          <div className="container cr-1">
            <div className="wrapper mt-5">
              <div className="text-center mt-4 name text-decoration-underline">
                SignUp Here
              </div>
              <form className="p-3 mt-3" onSubmit={signup}>
                <div className="form-field d-flex align-items-center py-0 my-0 ">
                  <i className="ri-user-line fs-4"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="form-field d-flex align-items-center my-4 ">
                  <i className="ri-shield-user-line fs-4"></i>
                  <input
                    type="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field d-flex align-items-center my-4">
                  <i className="ri-shield-keyhole-line fs-4"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-field d-flex align-items-center my-4 d-none">
                  <i className="ri-file-line"></i>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button className="btn mt-3 my-5" type="submit">
                  Create An Account
                </button>
                <div className="my-5 sg">
                  <h6>
                    <span className="fs-3">already have an account !</span>
                    <Link to="/login">
                      <button type="submit">
                        Log in <i className="ri-login-circle-line"></i>
                      </button>
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;
