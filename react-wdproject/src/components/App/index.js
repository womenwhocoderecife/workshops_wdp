import React from 'react';
import Header from '../Header';
import Projects from '../Projects';

import './app.css';

const App = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Projects />
    </main>
  </div>
);

export default App;
