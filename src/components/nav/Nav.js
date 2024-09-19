import './nav.css';
import { useState } from 'react';
import { navData } from './NavItems';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {navData.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActiveNav(item.href)}
          className={activeNav === item.href ? 'active' : ''}
          rel='noreferrer'
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
