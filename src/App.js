import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions/test.action';
import Home from './components/home/Home';
import About from './components/about/About';

export default function App() {
  const counterValue = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  return (
    <Router>
      <div>
        <h1>Counter: {counterValue}</h1>
        <button
          type="button"
          onClick={() => dispatch({ type: INCREMENT_COUNTER })}
        >
          Increment Counter
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: DECREMENT_COUNTER })}
        >
          Decrement Counter
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
