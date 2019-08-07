import React from 'react';
import Header from '../Header';
import Projects from '../Projects';

import './app.css';
import Contact from '../Contact';

const App = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
