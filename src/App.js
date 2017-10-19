import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, // import the Route for creating routes
  Link // import the Link for creating Links
} from 'react-router-dom';

import './style.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contacts';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Contacts" component={Contact} />

        <Footer />
        </div>
      </Router>
    );
  }
}

export default App; // export App component
