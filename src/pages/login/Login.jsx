import React from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  document.title = 'Sova. / Log In';
  return (
    <div className="login">
      <MinusLogo />
      <h1>Log In</h1>
      <p>Log in to your account</p>

      <form action="">
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input type="text" id="email" />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input type="password" id="password" />
        <div className="form-details">
          <div className="check">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button className="validate">Log In</button>
      </form>

      <p className="account-text">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
