import React from 'react';
import '../../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="container">
        <div className="coffee-header">
          <div className="coffee-header__buttons coffee-header__button-one" />
          <div className="coffee-header__buttons coffee-header__button-two" />
          <div className="coffee-header__display" />
          <div className="coffee-header__details" />
        </div>
        <div className="coffee-medium">
          <div className="coffe-medium__exit" />
          <div className="coffee-medium__arm" />
          <div className="coffee-medium__liquid" />
          <div className="coffee-medium__smoke coffee-medium__smoke-one" />
          <div className="coffee-medium__smoke coffee-medium__smoke-two" />
          <div className="coffee-medium__smoke coffee-medium__smoke-three" />
          <div className="coffee-medium__smoke coffee-medium__smoke-for" />
          <div className="coffee-medium__cup" />
        </div>
        <div className="coffee-footer" />
      </div>
    </div>
  );
};

export default Loader;
