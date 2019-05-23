import React, { Component } from 'react';
import './Box.css';
import { choice } from './helper';


class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'magenta', 'violet', 'pink']
  }
  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.allColors)
    }
    this.handleClick = this.handleClick.bind(this)
  }

  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors)
    } while (newColor === this.state.color)
    
    this.setState({color: newColor})
  }

  handleClick() {
    this.setColor()
  }

  render() {
    return (
      <div className="box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>

      </div>
    )
  }
}

export default Box;