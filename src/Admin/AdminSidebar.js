import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="addstudent">Add Student</NavLink>
        </li>
        <li>
          <NavLink to="deletestudent">Delete Student</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
