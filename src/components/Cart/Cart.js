import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Cart extends Component {
  render() {
    let cart = this.props.cart.map(item => (
      <div key={item.id} className="column">
        <div className="card">
          <h1 className="title">{item.nama}</h1>
          <img src={item.gambar} alt={item.nama} />
          <strong>Rp{item.harga}</strong>
          <button
            onClick={() => this.props.onRemoveCart(item.id)}
            className="button is-danger"
          >
            Remove From Keranjang
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Keranjang Anda</h1>
        <div className="columns">{cart}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {cart: state.cart};
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveCart: id => dispatch({type: actionTypes.REMOVE_CART, id: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
