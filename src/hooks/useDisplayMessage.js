import { useState } from "react";

export default function useDisplayMessage() {
    const [message, setMessage] = useState("This is a message")
  function displayMessage() {
    // return "This is a message";
    console.log("this is a message from display message");
    
  }
  return [message, displayMessage];
}
