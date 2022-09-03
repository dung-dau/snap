import React from 'react';
import './Home.css';
import NavbarOption from './NavbarOption';

const Home = () => {
  return (
    <div className="container">
      <div className="home-left">
        <h1>Make remote work</h1>
        <pre>
          Get your team in sync no matter the location. Streamline processes,
          create team rituals, and watch productivity soar.
        </pre>
        <NavbarOption title="learn more" />
      </div>
      <div className="home-right">
        <div>
          <img
            className="side-image"
            src={require('../images/image-hero-desktop.png')}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
