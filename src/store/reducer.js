import * as actionTypes from './actions';

const initalState = {
  cart: [],
  totalPrice: 0
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return {
        ...state,
        cart: state.cart.concat({
          id: action.payload.id,
          nama: action.payload.nama,
          harga: action.payload.harga,
          gambar: action.payload.gambar,
          inCart: !action.payload.inCart,
          quantity: action.payload.quantity
        }),
        totalPrice:
          state.totalPrice + action.payload.harga * action.payload.quantity
      };
    case actionTypes.REMOVE_CART:
      const updatedCart = state.cart.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice:
          state.totalPrice - action.payload.harga * action.payload.quantity
      };
    case actionTypes.INCREMENT:
      const cartIncrementIndex = state.cart.findIndex(item => {
        return item.id === action.payload.id;
      });
      const copyCart = [...state.cart];
      copyCart[cartIncrementIndex].quantity += 1;
      const incQuantity = copyCart[cartIncrementIndex].quantity;
      return {
        ...state,
        cart: copyCart,
        totalPrice: state.totalPrice + action.payload.harga * incQuantity
      };
    case actionTypes.DECREMENT:
      const cartDecrementIndex = state.cart.findIndex(item => {
        return item.id === action.payload.id;
      });
      const copyDecrementCart = [...state.cart];
      copyDecrementCart[cartDecrementIndex].quantity -= 1;
      const decQuantity = copyDecrementCart[cartDecrementIndex].quantity;
      return {
        ...state,
        cart: copyDecrementCart,
        totalPrice: state.totalPrice + action.payload.harga * decQuantity
      };
    default:
      return state;
  }
};

export default reducer;
