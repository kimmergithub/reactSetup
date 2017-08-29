file/blog url
https://ihatetomatoes.net/react-cheat-sheet-pdf/
filename url
https://ihatetomatoes.net/wp-content/uploads/2017/01/react-cheat-sheet-v1.pdf


================================================================================================
  https://www.youtube.com/watch?v=hv8yquBKrFY
  import && export REACT components
================================================================================================

1. rename app.js === index.js
2. fix all app.js paths === webpack.congig.js

3. export from the app.js file

import React from 'react';

export const App = () => {
  return (
    <div>
      <h1 className="title">Kimmer Joseph OReilly</h1>
      <button className="nav-buttons" id="home-button">Home</button>
      <button className="nav-buttons" id="portfolio-button">Portfolio</button>
      <button className="nav-buttons" id="contact-button">Contact</button>
    </div>
  )
}

4. Import into the index.js filename

import {App} from './app'

================================================================================================
  https://www.youtube.com/watch?v=1WEdbr_Es1g
  prop and prop-types
================================================================================================
1. VERY INTERESTING AND IMPORTANT!!! but probably wont use them in this file...

================================================================================================
https://www.youtube.com/watch?v=RTAxNwa0KzY
  STATE and Classes === also awesome!!!
================================================================================================
