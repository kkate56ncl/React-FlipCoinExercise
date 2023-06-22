import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFliper.css';
import { Choice } from './helper';

class CoinFliper extends Component {
  static defaultProps = {
    coin: [
      {
        side: 'head',
        imgSrc:
          'https://www.thesun.co.uk/wp-content/uploads/2023/02/harry-potter-uk-50p-brilliant-uncirculated-coin-reverse-edge-uk22hpbu-1500x1500-f3a2c67.jpg',
      },
      {
        side: 'tail',
        imgSrc:
          'https://www.thesun.co.uk/wp-content/uploads/2023/02/hogwarts-express-2022-uk-50p-brilliant-uncirculated-coin-reverse-edge-uk22hebu-1500x1500-f3a2c67.jpg',
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = { curCoin: null, totalCount: 0, headCount: 0, tailCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = Choice(this.props.coin);
    this.setState((curState) => {
      return {
        curCoin: newCoin,
        totalCount: (curState.totalCount += 1),
        headCount: curState.headCount + (newCoin.side === 'head' ? 1 : 0),
        tailCount: curState.tailCount + (newCoin.side === 'tail' ? 1 : 0),
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFliper">
        <h1>Let's flip a coin!</h1>
        {this.state.curCoin && <Coin info={this.state.curCoin} />}
        <button onClick={this.handleClick}>FLIP MEEEE</button>
        <h3>
          Out of {this.state.totalCount} flips, there have been {this.state.headCount} heads and{' '}
          {this.state.tailCount} tails.
        </h3>
      </div>
    );
  }
}

export default CoinFliper;
