// Import modules === pulling in everything... 
import React from 'react';

const Headline = () => {
  return <h1 className="title">Kimmer Joseph OReilly</h1>
}

const NavButtons = () => {
  return (
    <div>
      <button className="nav-buttons" id="home-button">Home</button>
      <button className="nav-buttons" id="portfolio-button">Portfolio</button>
      <button className="nav-buttons" id="contact-button">Contact</button>
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Headline />
      <NavButtons />
    </div>
  )
}
