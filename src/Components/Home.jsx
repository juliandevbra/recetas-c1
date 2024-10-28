import { useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div>
      <ul>
        {cart.map((pedido) => (
          <li key={pedido.id}>{pedido.tipo}</li>
        ))}
      </ul>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} pizza={pizza} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
