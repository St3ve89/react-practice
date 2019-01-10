import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: '' }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }
  
  componentDidUpdate() {
    console.log('My component was updated - it rerendered!');
  }

  render() {
    const { lat, errorMessage } = this.state

    if(errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>
    }

    if(!errorMessage && lat) {
      return <div>Latitude: {lat}</div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))