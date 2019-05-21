import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props)

    this.state= {
      nums: Array.from({length: this.props.maxBalls})
    };

    this.handleClick = this.handleClick.bind(this)
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
    
  }

  handleClick() {
    this.generate();
  }

  render(){
    const { title } = this.props;
    const { nums } = this.state;
    return (
      <section className="lottery">
        <h1>{title}</h1>
        <div>
          {nums.map(n => <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate!</button>
      </section>
    )
  }
}

export default Lottery;