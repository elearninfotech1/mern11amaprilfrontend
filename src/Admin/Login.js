import React, { useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const studentData = (e) => {
    e.preventDefault();
    axios
      .post(`https://mern11amapril.onrender.com/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        alert("Unable to add Student");
      });
  };
  return (
    <>
      <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Admin Login</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">&nbsp;</div>
            <div className="col-md-4">
              <div className={innerStyles.form}>
                <form onSubmit={studentData}>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Add Student"
                    />
                  </div>
                </form>
                <NavLink to="/signup">Client here for New User?</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
