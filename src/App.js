import React from 'react';
import './App.css';

import AnekaNasi from './container/AnekaNasi';
import Layout from './hoc/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <AnekaNasi />
      </Layout>
    </div>
  );
}

export default App;
