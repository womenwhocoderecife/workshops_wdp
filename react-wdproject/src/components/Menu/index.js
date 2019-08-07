import React from 'react';

import './menu.css';

const Menu = () => (
  <nav className="nav">
    <ul className="list">
      <li className="list__item">
        <a className="list__item__link">Home</a>
      </li>
      <li className="list__item">
        <a className="list__item__link">Projects</a>
      </li>
      <li className="list__item">
        <a className="list__item__link">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
