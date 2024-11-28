import Card from "../Components/Card";
import { useRecipeStates } from "../Context/Context";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

const Home = () => {
  const { state } = useRecipeStates();
  return (
    <div>
      <h1 style={titleStyles}>Bienvenido al proyecto de recetas</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
