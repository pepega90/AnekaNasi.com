import React, {Component} from 'react';
import styling from './AnekaNasi.module.css';
import dataNasi from '../productData/nasiData';

class AnekaNasi extends Component {
  state = {
    nasi: dataNasi
  };

  render() {
    let anekenasi = this.state.nasi.map(nasi => (
      <div key={nasi.nama} className="column">
        <h1 className="title">{nasi.nama}</h1>
        <img src={nasi.image} alt={nasi.nama} />
        <div>
          <strong>Rp{nasi.harga}</strong>
          <button className="button is-primary">Add to Keranjang</button>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="container">
          <div className={styling.header}>
            <h1 className="title is-2">AnekaNasi.com</h1>
            <p className="subtitle is-4">
              Tempat Dimana anda bisa membeli olahan nasi yang enak
            </p>
          </div>
          <div className="columns">{anekenasi}</div>
        </div>
      </div>
    );
  }
}

export default AnekaNasi;
