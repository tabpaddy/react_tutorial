import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";


export default function Login() {
  const [value, SetValue] = useState("");
  const { state, dispatch } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    //setUser(value);
    dispatch({type : "login", payload: value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => SetValue(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
