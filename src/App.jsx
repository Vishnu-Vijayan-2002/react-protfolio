import { useState } from "react";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
