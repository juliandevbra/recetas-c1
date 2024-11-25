import { Link, useLocation } from "react-router-dom";
import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";
import { useRecipeStates } from "../Context/Context";
import { useState } from "react";

const Card = ({ recipe }) => {
  const [counter, setCounter] = useState(0);
  const { image, title, pricePerServing, id } = recipe;
  const { setCart } = useRecipeStates();
  const location = useLocation();
  console.log(location);

  return (
    <div className={cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      {location.pathname == "/cart" ? (
        <h2>Recetas agregadas: {recipe.counter}</h2>
      ) : (
        <>
          <Counter counter={counter} setCounter={setCounter} />
          <button
            disabled={counter == 0}
            onClick={() =>
              setCart((prevState) => [
                ...prevState,
                { ...recipe, counter: counter },
              ])
            }
          >
            Agregar al 🛒
          </button>
        </>
      )}
    </div>
  );
};

export default Card;

// setCart((valorPrevio) => {
//   return [...valorPrevio, valorNuevo]
// })
