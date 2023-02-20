import React from 'react';
import Hero from '../../assets/hero.png';
import Logo from '../../components/logo/Logo';
import './OnBoarding.scss';
import { Link } from 'react-router-dom';

const OnBoarding = () => {
  document.title = 'Welcome to Sova App';
  return (
    <div className="onBoarding">
      <div className="hero">
        <Logo />
        <img src={Hero} alt="Hero" />
        <h1>Welcome to Sova</h1>
        <p>
          Get comparative estimation on what’s the industry norm of the real
          states.
        </p>
      </div>

      <div className="gpe-buttons">
        <Link to="/signup">
          <button className="signup">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default OnBoarding;
