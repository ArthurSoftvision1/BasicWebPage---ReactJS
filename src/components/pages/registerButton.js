import React, { Component } from 'react';
import LogInButton from './logInButton';
import {
    Link
} from 'react-router-dom'

class RegisterButton extends Component {
  render() {
    return (
        <div className="register-container">
          <Link className="register-button" to="/RegisterPage">Register</Link>
          <LogInButton />
        </div>
    );
  }
}

export default RegisterButton;
