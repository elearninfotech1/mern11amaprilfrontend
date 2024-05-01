import React, { useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
const AddStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const studentData = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/student`, {
        id,
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        alert("Student Added Succe..");
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add Student");
      });
  };
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form className={innerStyles.form} onSubmit={studentData}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="id"
                    placeholder="Id"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
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

export default AddStudent;
