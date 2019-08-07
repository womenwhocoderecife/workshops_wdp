import React from 'react';

import './footer.css';
import github from '../../assets/img/github.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import linkedin from '../../assets/img/linkedin.svg';
import dribbble from '../../assets/img/dribbble.svg';

const Footer = () => (
  <footer class="footer">
    <ul class="social-media__list">
      <li class="social-media__list__item">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/womenwhocoderecife/workshops_wdp/tree/master/react-wdproject"
          class="social-media__list__link"
        >
          <img class="social-media__lis__img" src={github} alt="github" />
        </a>
      </li>
      <li class="social-media__list__item">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/wwcoderecife/"
          class="social-media__list__link"
        >
          <img class="social-media__lis__img" src={instagram} alt="instagram" />
        </a>
      </li>
      <li class="social-media__list__item">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/WWCode_Recife"
          class="social-media__list__link"
        >
          <img class="social-media__lis__img" src={twitter} alt="twitter" />
        </a>
      </li>
      <li class="social-media__list__item">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/womenwhocoderecife/workshops_wdp/tree/master/react-wdproject"
          class="social-media__list__link"
        >
          <img class="social-media__lis__img" src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li class="social-media__list__item">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/womenwhocoderecife/workshops_wdp/tree/master/react-wdproject"
          class="social-media__list__link"
        >
          <img class="social-media__lis__img" src={dribbble} alt="dribbble" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
