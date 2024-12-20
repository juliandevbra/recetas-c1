import React from "react";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";

const Cart = () => {
  const { state } = useRecipeStates();
  return (
    <div>
      <h1>Recetas agregadas</h1>
      <div>
        {state.cart.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
