import reducer from './reducer';

import * as actionsTypes from './actions';

describe( 'reducer', () => {

  it( 'Harus me-return initalState', () => {
    expect( reducer( undefined, {} ) ).toEqual( {
      cart: [],
      totalPrice: 0
    } )
  } )

} );
