const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1 className="title">Kimmer Joseph OReilly</h1>
      <button className="nav-buttons" id="home-button">Home</button>
      <button className="nav-buttons" id="portfolio-button">Portfolio</button>
      <button className="nav-buttons" id="contact-button">Contact</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('kimmer')
);


// <button>Home</button><button>Projects</button><button>Contact</button></div>,
