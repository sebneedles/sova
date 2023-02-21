import React, { useState } from 'react';
import MinusLogo from '../../../components/minuslogo/MinusLogo';
import './Signup.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  document.title = 'Sova. / Sign Up';
  return (
    <div className="signup">
      <MinusLogo />
      <h1>Sign Up</h1>
      <p>Log in to your account</p>

      <form onSubmit={signup}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-details">
          <div className="check">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
        </div>
        <button className="validate" type="submit">
          Sign Up
        </button>
      </form>

      <p className="account-text">
        You have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
