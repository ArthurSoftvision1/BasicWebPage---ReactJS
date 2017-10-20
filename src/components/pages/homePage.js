import React, { Component } from 'react';
import Parallax from '../../components/contentComponent/parallax';
import ParallaxBlock from '../../components/contentComponent/parallaxBlock';

class Homepage extends Component {
  render() {
    return (
    <div>
        <Parallax />
        <div className="container">
          <ParallaxBlock />
        </div>
    </div>
    );
  }
}

export default Homepage;
