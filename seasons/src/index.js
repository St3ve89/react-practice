import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null }
  }


  render() {
    const { lat } = this.state
    
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )
    return <div>Latitude: {lat}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))