// import CardStyles from "../styles/Card.module.css";
import { cardContainer } from "../styles/Card.module.css";
// console.log(CardStyles)
console.log(cardContainer);

const Card = ({ pizza }) => {
  const { tipo, precio, img } = pizza;
  return (
    <div className={cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
    </div>
  );
};

export default Card;
