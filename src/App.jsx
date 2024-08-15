import Hello from "./components/Hello";
import "./App.css";
import Fruits from "./components/Fruits";


const person = {
  name: "rob",
  message: "Hi There",
  seatNumbers: [1, 4, 7],
};
function App() {
  return (
    <div className="App">
      <Fruits />
    </div>
  );
}

export default App;
