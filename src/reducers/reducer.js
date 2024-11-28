export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART":
      const filterCart = []; //Falta completar
      return { ...state, cart: filterCart };
    default:
      throw new Error("Acción no existente");
  }
};
