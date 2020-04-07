import React, {Component} from 'react';

import Navbar from '../components/Navbar/Navbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
