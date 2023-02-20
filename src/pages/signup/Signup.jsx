import React from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './Signup.scss';
import { Link } from 'react-router-dom';

const Signup = () => {
  document.title = 'Sova. / Sign Up';
  return (
    <div className="login">
      <MinusLogo />
      <h1>Sign Up</h1>
      <p>Create your account</p>

      <form action="">
        <label htmlFor="name">
          Full Name<span>*</span>
        </label>
        <input type="text" id="name" />
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input type="text" id="email" />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input type="password" id="password" />
        <label htmlFor="confpassword">
          Repeat Password<span>*</span>
        </label>
        <input type="password" id="confpassword" />
        <div className="form-details">
          <div className="check">
            <input type="checkbox" />
            <span>I agree to the</span>
            <Link to="/terms"> Terms & Conditions</Link>
          </div>
        </div>
        <button className="validate">Sign Up</button>
      </form>

      <p className="account-text">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
