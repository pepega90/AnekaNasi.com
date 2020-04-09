import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import styling from './Cart.module.css';

class Cart extends Component {
  render() {
    let cart = this.props.cart.map(item => (
      <div key={item.id} className={styling.singleKolom}>
        <div className={styling.headerSingle}>
          <h1 className="title">{item.nama}</h1>
          <img src={item.gambar} width="150" alt={item.nama} />
        </div>
        <strong>Rp{item.harga}</strong>
        <div className={styling.quantity}>
          <button
            onClick={() => this.props.onDecrement(item.id, item.harga)}
            className="button is-danger"
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => this.props.onIncrement(item.id, item.harga)}
            className="button is-primary"
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            this.props.onRemoveCart(item.id, item.harga, item.quantity)
          }
          className="button is-danger"
        >
          Remove From Keranjang
        </button>
      </div>
    ));
    return (
      <div className="container">
        <div className={styling.header}>
          <h1 className="title is-2">Keranjang Anda</h1>
        </div>
        {this.props.cart.length > 0 ? (
          <div className={styling.info}>
            <h1 className="title is-4">Nama</h1>
            <h2 className="title is-4">Harga</h2>
          </div>
        ) : (
          <h1>Anda Belum Memesan Apa-apa</h1>
        )}
        <div className={styling.kolom}>{cart}</div>
        {this.props.cart.length > 0 ? (
          <div className={styling.total}>
            <h1 className="title">Total Harga</h1>
            <h2 className="title is-3">Rp{this.props.total}</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveCart: (id, harga, quantity) =>
      dispatch({
        type: actionTypes.REMOVE_CART,
        payload: {id: id, harga: harga, quantity: quantity}
      }),
    onIncrement: (id, harga) =>
      dispatch({type: actionTypes.INCREMENT, payload: {id: id, harga: harga}}),
    onDecrement: (id, harga) =>
      dispatch({type: actionTypes.DECREMENT, payload: {id: id, harga: harga}})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
