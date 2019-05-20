import React, { Component } from 'react'
import './Ball.css';

class Ball extends Component {
  render(){
    const{num} = this.props;
    return (
      <div className="ball">
        {num}
      </div>
    )
  }
}

export default Ball