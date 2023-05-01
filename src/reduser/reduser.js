const initialState = {
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CART_PRODUCT":
      return {
        cartProducts: [...state.cartProducts, action.product],
      };
    case "DELETE_CART_PRODUCT":
      const newCartItems = state.cartProducts.filter(
        (item) => item.id !== action.product.id
      );
      return {
        cartProducts: [...newCartItems],
      };
    default:
      return state;
  }
};

export default cartReducer;
