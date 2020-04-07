import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import AnekaNasi from './container/AnekaNasi';
import Cart from './components/Cart/Cart';
import Layout from './hoc/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={AnekaNasi} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
