export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const add_cart = (id, nama, harga, gambar, inCart, quantity) => {
	return {
		type: ADD_CART,
		id: id,
		nama: nama,
		harga: harga,
		gambar: gambar,
		inCart: inCart,
		quantity: quantity,
	};
};

export const remove_cart = (id, harga) => {
	return {
		type: REMOVE_CART,
		id: id,
		harga: harga,
	};
};
