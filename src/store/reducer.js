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
          id: action.id,
          nama: action.nama,
          harga: action.harga,
          gambar: action.gambar,
          inCart: !action.inCart,
          quantity: action.quantity
        }),
        totalPrice: state.totalPrice + action.harga
      };
    case actionTypes.REMOVE_CART:
      const updatedCart = state.cart.filter(
        item => item.id !== action.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice - action.harga
      };
    default:
      return state;
  }
};

export default reducer;
