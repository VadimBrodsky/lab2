import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Main = () => (
  <Router>
    <div>
      <h1>
        <Link to="/">Reduxtagram</Link>
      </h1>
    </div>
  </Router>
);

export default Main;
