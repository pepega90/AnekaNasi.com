import * as actionTypes from './actions';

const initalState = {
    cart: [],
    totalPrice: 0,
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
                }),
                totalPrice: state.totalPrice + action.harga,
            };
        case actionTypes.REMOVE_CART:
            const updatedCart = state.cart.filter(
                item => item.id !== action.id
            );
            const backToFirstTotal = 0;
            return {
                ...state,
                cart: updatedCart,
                totalPrice:
                    updatedCart.length <= 0
                        ? backToFirstTotal
                        : state.totalPrice - action.harga,
            };
        default:
            return state;
    }
};

export default reducer;
