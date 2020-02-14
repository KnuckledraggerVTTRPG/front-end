import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home/Home';

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <div className="nav--item">
          <Link to="/" className="nav__link nav__link--hover--rock-salt center">
            Kickstarter
          </Link>
        </div>
        <div className="nav--item">
          <Link to="/" className="nav__link nav__link--hover--rock-salt center">
            Wiki
          </Link>
        </div>
        <div className="nav--item">
          <Link to="/" className="nav__link nav__link--hover--rock-salt center">
            Play
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
