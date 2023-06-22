import React, { useState } from "react";
import Helmert from "../Components/Helmert/Helmert";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireebase.js";
import { toast } from "react-toastify";
import "../Styles/Login.css";
const Login = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCrendential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCrendential);
      toast.success("logged in sucessfully");
      setLoading(false);
      navi("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Helmert title="Login" />
      <div className="container cr-1">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="wrapper">
            <div className="text-center mt-4 name">Login Here</div>
            <form className="p-3 mt-3" onSubmit={login}>
              <div className="form-field d-flex align-items-center ">
                <i className="ri-shield-user-line fs-4"></i>
                <input
                  type="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field d-flex align-items-center ">
                <i className="ri-shield-keyhole-line fs-4"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn mt-3" type="submit">
                Login
              </button>
              <div className="my-5 sg">
                <h6>
                  <span className="fs-3">dont have an account !</span>
                  <Link to="/signup">
                    <button type="submit">
                      Sign up <i className="ri-login-circle-line"></i>
                    </button>
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
