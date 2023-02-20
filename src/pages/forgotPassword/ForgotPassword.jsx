import React from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './ForgotPassword.scss';
import LeftArrow from '../../assets/left-arrow.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  document.title = 'Sova. / Forgot Password?';
  return (
    <div className="forgotPassword">
      <div className="nav">
        <Link to="/login">
          <img src={LeftArrow} alt="go back" />
        </Link>
        <MinusLogo />
      </div>
      <h1>Forgot password</h1>
      <p>Enter your email to receive a token</p>

      <form action="">
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input type="text" id="email" placeholder="Enter your email here" />

        <div className="form-details"></div>
        <button className="validate">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
