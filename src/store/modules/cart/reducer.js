export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product } = action;
      return [...state, product];
    }
    default:
      return state;
  }
}
