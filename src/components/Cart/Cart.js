import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import styling from './Cart.module.css';

const Cart = props => {
  let cart = props.cart.map(item => (
    <div key={item.id} className={styling.singleKolom}>
      <div className={styling.headerSingle}>
        <h1 className="title">{item.nama}</h1>
        <img src={item.gambar} width="150" alt={item.nama} />
      </div>
      <div className={styling.detail}>
        <strong>Rp{item.harga}</strong>
        <button
          onClick={() => props.onRemoveCart(item.id, item.harga)}
          className="button is-danger">
          Remove
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className={styling.header}>
        <h1 className="title is-2">Keranjang Anda</h1>
        <hr />
      </div>
      {props.cart.length > 0 ? (
        <div className={styling.keranjang}>
          <div className={styling.info}>
            <h1 className="title is-4">Nama</h1>
            <h2 className="title is-4">Harga</h2>
          </div>
          <div className={styling.kolom}>{cart}</div>
          <div className={styling.total}>
            <h1 className="title">Total Harga</h1>
            <h2 className="title is-3">Rp{props.total}</h2>
          </div>
        </div>
      ) : (
        <h1>Anda Belum Memesan Apa-apa</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveCart: (id, harga) =>
      dispatch(actionCreators.remove_cart(id, harga)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
