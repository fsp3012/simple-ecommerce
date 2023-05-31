import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Stores from "./components/Stores";
import Modal from "./components/Modal";
import { useState } from "react";
import AddToCart from "./components/AddToCart";

function App() {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  const [cart1, setCart1] = useState([]);
  const [showcart, setShowCart] = useState(false);

  return (
    <div className="App">
      <Navbar showcart={showcart} setShowCart={setShowCart} />
      <Stores
        modal={setModal}
        count={count}
        setCount={setCount}
        cart1={cart1}
        setCart1={setCart1}
      />
      {showcart && (
        <AddToCart
          count={count}
          setCount={setCount}
          cart1={cart1}
          setCart1={setCart1}
          showcart={showcart}
          setShowCart={setShowCart}
        />
      )}
      {modal && <Modal modal={setModal} />}
    </div>
  );
}

export default App;
