import React, { useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
const AdminDashboard = () => {
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
      .post(`http://localhost:4000/signup`, {
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
              <h4>Admin Dashboard</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminSidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
