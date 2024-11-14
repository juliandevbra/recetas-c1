import { useEffect, useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <div>
      {/* <ul>
        {cart.map((pedido) => (
          <li key={pedido.id}>{pedido.tipo}</li>
        ))}
      </ul> */}
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
