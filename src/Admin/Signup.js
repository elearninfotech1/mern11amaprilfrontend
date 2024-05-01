import React, { useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
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
      .post(`https://mern11amapril.onrender.com/signup`, {
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      })
      .then((res) => {
        alert("Signup Succe..");
        navigate("/login");
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
              <h4>Add Student</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">&nbsp;</div>
            <div className="col-md-4">
              <form className={innerStyles.form} onSubmit={studentData}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="mb-4">
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
