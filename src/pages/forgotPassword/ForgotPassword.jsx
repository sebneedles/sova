import React, { useState } from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './ForgotPassword.scss';
import LeftArrow from '../../assets/left-arrow.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  document.title = 'Sova. / Forgot Password?';

  const reSendToken = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email);
    } catch (error) {
      setError(true);
    }
  };
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

      <form onSubmit={reSendToken}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="form-details"></div>
        <button className="validate">Submit</button>
        {error && <span className="success">Email sent...</span>}
      </form>
    </div>
  );
};

export default ForgotPassword;
