import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleClick = async () => {
    this.setState({message: 'Įkeliami duomenys iš duomenų bazės.....'})
    const data = await axios.get('/test')    
    const message = await data.data.data[0].message
    this.setState({message: message})
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Paspausk mane!</button>
      </div>
    )
  }
}
