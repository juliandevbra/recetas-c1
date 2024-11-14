import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ recipe, cart, setCart }) => {
  const { image, title, pricePerServing } = recipe;
  return (
    <div className={cardContainer}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart([...cart, recipe])}>Agregar al 🛒</button>
    </div>
  );
};

export default Card;
