import React, { Component } from 'react';
import { choice } from './helpers';


class CoinContainer extends Component {

  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props) {
    super(props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render(){
    const { nFlips, nTails, nHeads } = this.state;
    return(
      <div className="coin-container">
        <h2>Let's Flip the coin!</h2>
        <button onClick={this.handleClick}>Flip me!</button>
        <p>Out of {nFlips} flips, there have been {nHeads} heads and {nTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer;