import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return <img className="Face-img" src={this.props.info.imgSrc} alt={this.props.info.side} />;
  }
}

export default Coin;
