import React, { Component } from 'react';
import Logo from '../headerComponent/logo';
import {
  Link // import Link
} from 'react-router-dom'

class Footer extends Component { // footer component
  render() { // render function
    return (
     <footer>
        <div className="footer-section">

        <div className="logo">
        <div className="logo-position">
            <Logo />
        </div>
    </div>

            <ul className="footer-options">
                <li className="first"> 
                    <Link to="/" className="footer-links">Home</Link>
                </li>
                <li> 
                    <Link to="/Products" className="footer-links">Products</Link>
                </li>
                <li className="last"> 
                    <Link to="/Contacts" className="footer-links">Contact</Link>
                </li>
            </ul>
        </div>
     </footer>
    );
  }
}

export default Footer; // export Footer component
