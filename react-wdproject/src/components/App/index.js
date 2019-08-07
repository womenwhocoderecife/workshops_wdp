import React from 'react';
import Header from '../Header';
import Projects from '../Projects';

import './app.css';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
