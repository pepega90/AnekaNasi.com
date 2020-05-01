import React, { useState } from 'react';
import styling from './AnekaNasi.module.css';
import dataNasi from '../productData/nasiData';
import * as actionCreators from '../store/actions';
import { connect } from 'react-redux';

import Footer from '../components/Footer/Footer';

const AnekaNasi = props => {
  const nasi = useState(dataNasi)[0];

  const goCart = (id, nama, harga, gambar, inCart) => {
    const findNasi = nasi.findIndex(item => item.id === id);
    props.cart.forEach(item => {
      if (nasi[findNasi].id === item.id) {
        alert(`${nasi[findNasi].nama} Sudah Ada Di Keranjang`);
        props.onRemoveCart(nasi[findNasi].id, nasi[findNasi].harga);
      }
    });
    props.onAddCart(id, nama, harga, gambar, inCart);
  };

  let listNasi = nasi.map(rice => (
    <div key={rice.nama} className="column">
      <div className={styling.card} style={{ padding: '10px' }}>
        <h1 className="title">{rice.nama}</h1>
        <div className="card-image">
          <img src={rice.image} className={styling.image} alt={rice.nama} />
        </div>
        <div className={styling.detail}>
          <strong>Rp{rice.harga}</strong>
          <button
            style={{ margin: '10px 0' }}
            onClick={goCart.bind(
              this,
              rice.id,
              rice.nama,
              rice.harga,
              rice.image,
              rice.inCart
            )}
            className={rice.inCart ? 'button is-danger' : 'button is-primary'}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container is-fullhd">
        <div className={styling.header}>
          <h1 className="title is-2">AnekaNasi.com</h1>
          <p className="subtitle is-4">
            Tempat Dimana anda bisa membeli olahan nasi yang enak
          </p>
        </div>
        <div className={styling.welcome}>
          <h1 className="title">Pilih Nasi Favorite Anda!</h1>
        </div>
      </div>
      <div className="container">
        <div className={styling.productKolom}>{listNasi}</div>
      </div>
      <Footer />
    </div>
  );
};

// redux section
const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCart: (id, nama, harga, gambar, inCart) =>
      dispatch(actionCreators.add_cart(id, nama, harga, gambar, inCart)),
    onRemoveCart: (id, harga) =>
      dispatch(actionCreators.remove_cart(id, harga)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnekaNasi);
