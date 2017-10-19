import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
        <img className="logo-image" src={require('./logo-small.png')} />
    );
  }
}

export default Logo;