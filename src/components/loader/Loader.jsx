import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="container">
        <span>s</span>
        <span>o</span>
        <span>v</span>
        <span>a</span>
        <span className="orange">.</span>
      </div>
    </div>
  );
};

export default Loader;
