import { Link } from "react-router-dom";
import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ recipe, cart, setCart }) => {
  const { image, title, pricePerServing, id } = recipe;
  return (
    <div className={cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart([...cart, recipe])}>Agregar al 🛒</button>
    </div>
  );
};

export default Card;
