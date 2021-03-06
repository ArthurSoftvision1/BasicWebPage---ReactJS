import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, // import the Route for creating routes
  Link // import the Link for creating Links
} from 'react-router-dom';


import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contacts';
import RegisterPage from './components/pages/registerPage';
import LogInPage from './components/pages/logInPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
         
          <Route exact path="/LoginPage" component={LogInPage} />
          <Route exact path="/RegisterPage" component={RegisterPage} />
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
