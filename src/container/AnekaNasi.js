import React, {Component} from 'react';
import styling from './AnekaNasi.module.css';
import dataNasi from '../productData/nasiData';
import * as actionTypes from '../store/actions';
import {connect} from 'react-redux';

import Footer from '../components/Footer/Footer';

class AnekaNasi extends Component {
  state = {
    nasi: dataNasi
  };

  render() {
    let anekenasi = this.state.nasi.map(nasi => (
      <div key={nasi.nama} className="column">
        <div className={styling.card} style={{padding: '10px'}}>
          <h1 className="title">{nasi.nama}</h1>
          <div className="card-image">
            <img src={nasi.image} className={styling.image} alt={nasi.nama} />
          </div>
          <div className={styling.detail}>
            <strong>Rp{nasi.harga}</strong>
            <button
              style={{margin: '10px 0'}}
              onClick={() =>
                this.props.onAddCart(
                  nasi.id,
                  nasi.nama,
                  nasi.harga,
                  nasi.image,
                  nasi.inCart,
                  nasi.quantity
                )
              }
              className="button is-primary"
            >
              Add to Keranjang
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
          <div className={styling.productKolom}>{anekenasi}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

// redux section
const mapDispatchToProps = dispatch => {
  return {
    onAddCart: (id, nama, harga, gambar, inCart, quantity) =>
      dispatch({
        type: actionTypes.ADD_CART,
        payload: {
          id: id,
          nama: nama,
          harga: harga,
          gambar: gambar,
          inCart: inCart,
          quantity: quantity
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(AnekaNasi);
