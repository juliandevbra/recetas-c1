import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const RecipeStates = createContext();

const Context = ({ children }) => {
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
    <RecipeStates.Provider value={{ cart, setCart, recipes }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
