import React, { useEffect, useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";
const DeleteStudent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteStudent = (sid) => {
    axios
      .delete(`http://localhost:4000/student/${sid}`)
      .then((res) => {
        alert("data deleted succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((stu) => {
                      return (
                        <tr>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-3"
                              onClick={() => deleteStudent(stu.id)}
                            >
                              <Icon name="delete calendar" />
                            </button>

                            <NavLink to={`/editstudent/${stu.id}`}>
                              <button className="btn btn-success">
                                <Icon name="pencil alternate" />
                              </button>
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteStudent;
