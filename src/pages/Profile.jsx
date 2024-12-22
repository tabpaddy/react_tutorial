import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { username } = location.state || {};
  return <div>Profile for {username}</div>;
};

export default Profile;
