import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we call setState to update state
        this.setState({ lat: position.coords.latitude })
      },
      err => console.log(err)
    )
  }


  render() {
    const { lat } = this.state

    return <div>Latitude: {lat}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))