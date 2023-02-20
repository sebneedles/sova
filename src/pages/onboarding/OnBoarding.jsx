import React from 'react';
import Hero from '../../assets/hero.png';
import Logo from '../../components/logo/Logo';
import './OnBoarding.scss';
import { Link } from 'react-router-dom';

const OnBoarding = () => {
  return (
    <div className="onBoarding">
      <Logo />
      <img src={Hero} alt="Hero" />
      <h1>Welcome to Sova</h1>
      <p>
        Get comparative estimation on what’s the industry norm of the real
        states.
      </p>
      <div className="container-button">
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
