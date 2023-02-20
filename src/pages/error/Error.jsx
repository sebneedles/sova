import React from 'react';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import './Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  document.title = 'Sova. / Error 404';
  return (
    <div className="error">
      <MinusLogo />
      <h1>
        Oops! <span>Error 404!</span>
      </h1>
      <p className="error-msg">
        Go to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default Error;
