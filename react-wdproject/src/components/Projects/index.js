import React from 'react';

import './projects.css';
import idea from '../../assets/img/idea.svg';
import code from '../../assets/img/code.svg';
import microphone from '../../assets/img/microphone.svg';
import volunteer from '../../assets/img/volunteer.svg';

const Projects = () => (
  <section class="projects">
    <h2 class="projects__title">Projects</h2>
    <ul class="projects__list">
      <li class="projects__list__item">
        <img class="projects__list__img" src={idea} alt="A light" />
        <h4 class="projects__list__title two">UX/ UI Designer</h4>
        <p class="projects__list__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ipsa recusandae cumque voluptates. Maxime dicta blanditiis natus
          incidunt cumque nam dolorem deleniti asperiores.
        </p>
      </li>
      <li class="projects__list__item">
        <img class="projects__list__img" src={code} alt="A light" />
        <h4 class="projects__list__title main-title">Front-end Developer</h4>
        <p class="projects__list__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ipsa recusandae cumque voluptates. Maxime dicta blanditiis natus
          incidunt cumque nam dolorem deleniti asperiores.
        </p>
      </li>
      <li class="projects__list__item">
        <img class="projects__list__img" src={microphone} alt="A light" />
        <h4 class="projects__list__title one">Talk</h4>
        <p class="projects__list__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ipsa recusandae cumque voluptates. Maxime dicta blanditiis natus
          incidunt cumque nam dolorem deleniti asperiores.
        </p>
      </li>
      <li class="projects__list__item">
        <img class="projects__list__img" src={volunteer} alt="A light" />
        <h4 class="projects__list__title three">Volunteer WWCode - Recife</h4>
        <p class="projects__list__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ipsa recusandae cumque voluptates. Maxime dicta blanditiis natus
          incidunt cumque nam dolorem deleniti asperiores.
        </p>
      </li>
    </ul>
  </section>
);

export default Projects;
