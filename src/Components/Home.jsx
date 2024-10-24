import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  //   const mapList = pizzas.map((pizza) => {
  //     return (
  //       <div>
  //         <h3>{pizza.tipo}</h3>
  //       </div>
  //     );
  //   });
  //   console.log(mapList);

  return (
    <div className="list-container">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
