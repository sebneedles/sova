import React, { useState } from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/auth-detail');
    } catch (error) {
      setError(true);
    }
  };

  document.title = 'Sova. / Log In';
  return (
    <div className="login">
      <MinusLogo />
      <h1>Log In</h1>
      <p>Log in to your account</p>

      <form onSubmit={login}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          required
        />
        <div className="form-details">
          <div className="check">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button className="validate" type="submit">
          Log In
        </button>
        {error && (
          <span className="danger">Incorrect Email or Password...</span>
        )}
      </form>

      <p className="account-text">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
