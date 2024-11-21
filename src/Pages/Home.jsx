import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 style={titleStyles}>Bienvenido al proyecto de recetas</h1>
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
