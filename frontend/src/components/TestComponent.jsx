import React, { Component } from 'react'

class TestComponent extends Component {
  constructor(props) {
    super(props)
    this.props = props    
  }

  render() {
    const {onClickHandle, messages} = this.props
    
    return (
      <div>
        <p>{messages.messages}</p>
        <button onClick={onClickHandle}>Paspausk mane!</button>
      </div>
    )
  }
}

export default TestComponent