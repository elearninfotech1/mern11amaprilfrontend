import React, { useEffect, useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let { id1 } = useParams();
  //alert(id1);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${id1}`)
      .then((res) => {
        setId(res.data[0].id);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPhone(res.data[0].phone);
        setAddress(res.data[0].address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const studentData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/student/${id1}`, {
        id,
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        alert("Student Updated Succe..");
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to update Student");
      });
  };

  return (
    <>
      <section className={innerStyles.breadc}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Edit Student</h4>
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
                    name="id"
                    placeholder="ID"
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
                    value="Update Student"
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

export default EditStudent;
