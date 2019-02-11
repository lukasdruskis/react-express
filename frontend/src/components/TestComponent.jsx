import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { onClickHandle, messages, isFetching } = this.props;

    return (
      <div>
        {isFetching && <LoadingSpinner />}
        <p>{messages}</p>
        <button onClick={onClickHandle}>Paspausk mane!</button>
      </div>
    );
  }
}

export default TestComponent;
