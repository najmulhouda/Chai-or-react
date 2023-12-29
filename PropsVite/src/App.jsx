import { useState } from "react";
import "./App.css";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name: "sachin",
    age: 23,
  };
  return (
    <>
      <Card read="Read Less" myObj={obj} />
      <Card read="more and more" />
    </>
  );
}

export default App;
