import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class LogInButton extends Component {
  render() {
    return (
          <Link className="login-button" to="/LoginPage">Login</Link>
    );
  }
}

export default LogInButton;
