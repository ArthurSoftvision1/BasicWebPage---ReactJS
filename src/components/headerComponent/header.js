import React, { Component } from 'react';
import Logo from './logo';
import Search from './searchInput';
import {
    Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
            <div className="logo-position">
                <Logo />
            </div>
        </div>
        <div>
            <nav>
                <ul>
                    <li className="search-bar">
                        <Search />
                    </li>
                    <li className="first"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                        <Link to="/Products">Products</Link>
                    </li>
                    <li className="last"> 
                        <Link to="/Contacts">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;
