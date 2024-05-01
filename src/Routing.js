import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./InnerPages/Home";
import AddStudent from "./InnerPages/AddStudent";
import EditStudent from "./Admin/EditStudent";
import Signup from "./Admin/Signup";
import Login from "./Admin/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import DeleteStudent from "./Admin/DeleteStudent";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editstudent/:id1" element={<EditStudent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddStudent />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="deletestudent" element={<DeleteStudent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
