import React from 'react';

export default function App() {
  return (
    <div>
      <nav className="nav">
        <div className="nav--item">
          <h2 className="heading-2 center">Kickstarter</h2>
        </div>
        <div className="nav--item">
          <h2 className="heading-2 center">Wiki</h2>
        </div>
        <div className="nav--item">
          <h2 className="heading-2 center">Play</h2>
        </div>
      </nav>
      <div className="root-container">
        <div className="logo-1">Logo</div>
        <h1 className="heading-1">
          KnuckledraggerRPG<small>Welcome to Planet</small>
        </h1>
        <form className="form">
          <label htmlFor="username">
            <input className="form--input" name="username" id="username" />
            Username
          </label>

          <label htmlFor="password">
            <input className="form--input" name="password" id="password" />
            Password
          </label>

          <a href="#" className="link-1">
            Create account
          </a>
          <a href="#" className="link-1">
            Lost password
          </a>
        </form>
      </div>
    </div>
  );
}
