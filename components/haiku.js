import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom'

class Haiku extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      haiku: ''
    }
  }
  render() {
    return (
        <div className="haiku">
            this.props.haiku
        </div>
    );
  }
}

export default Haiku;