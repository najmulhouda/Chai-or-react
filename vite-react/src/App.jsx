import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    if (count < 20) {
      setCount((c) => c + 1);
    }
  };

  const handleClickRemove = () => {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  };
  return (
    <>
      <h1>Hello, React!</h1>
      <button onClick={handleClickAdd}>count pluse {count}</button>
      <button onClick={handleClickRemove}>count remove {count}</button>
    </>
  );
}

export default App;
