import React, { Component } from 'react';
import Parallax from '../../components/contentComponent/parallax';
import ParallaxBlock from '../../components/contentComponent/parallaxBlock';

class Homepage extends Component {
  render() {
    return (
    <div className="container">
        <Parallax />
        <ParallaxBlock />
    </div>
    );
  }
}

export default Homepage;
