import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      HomePage
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Go to profile page</button>
    </div>
  );
};

export default HomePage;
