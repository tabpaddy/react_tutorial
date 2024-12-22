import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Setting</Link>
        </li>
      </ul>
      This is a DashBoard
      <Outlet />
    </div>
  );
};

export default DashBoard;
