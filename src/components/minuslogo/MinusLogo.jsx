import React from 'react';
import './MinusLogo.scss';
import { Link } from 'react-router-dom';

const MinusLogo = () => {
  return (
    <div className="MinusLogo">
      <Link to="/">
        sova
        <span>.</span>
      </Link>
    </div>
  );
};

export default MinusLogo;
