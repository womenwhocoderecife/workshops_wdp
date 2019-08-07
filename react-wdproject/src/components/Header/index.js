import React from 'react';
import Menu from '../Menu';

import './header.css';
import logo from '../../assets/img/WD.svg';
import woman from '../../assets/img/woman.jpg';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <img
        className="header__logo"
        src={logo}
        alt="Logo with two letters, the first one is W and the last one is D"
      />

      <Menu />
    </div>

    <div className="header-mean">
      <div className="header-main-title">
        <h1 className="primary-title">Hi! I'm a Woman</h1>
        <div className="header-title">
          <h2 className="secondary-title">I'm</h2>
          <h3 className="high-light-title">Developer</h3>
        </div>
      </div>

      <img
        className="header-mean__img"
        src={woman}
        alt="A women with your notebook"
      />
    </div>

    <p className="header__description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores
      commodi quo, placeat quam, debitis perspiciatis harum. Lorem ipsum dolor
      sit amet consectetur, adipisicing elit. Sunt non officia, assumenda ipsum
      optio voluptatibus consequuntur voluptate impedit, sequi provident, ullam
      illum commodi porro! Ratione optio perferendis nostrum quaerat omnis.
    </p>
  </header>
);

export default Header;
