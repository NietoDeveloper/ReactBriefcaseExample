import React from 'react';
import CTA from './CTA';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1><span class="gold">Manuel</span> <span class="blue">Nie</span><span class="scarlet">to</span></h1>
        <h5>Full Stack Software Developer</h5>
        <h3 className='text-light'>Junior</h3>
      </div>
      <CTA />
    </header>
  );
};

export default Header;
