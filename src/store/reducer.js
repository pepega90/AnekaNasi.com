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
          inCart: !action.payload.inCart
        }),
        totalPrice: state.totalPrice + action.payload.harga
      };
    case actionTypes.REMOVE_CART:
      const updatedCart = state.cart.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice - action.payload.harga
      };
    case actionTypes.ADD_QUANTITY:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.harga * action.payload.qty
      };
    default:
      return state;
  }
};

export default reducer;
