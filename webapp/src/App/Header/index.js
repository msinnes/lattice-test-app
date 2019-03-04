import React from 'react';

function search(event) {
  event.preventDefault();
  window.location.href = `/search?query=${event.target.children[0].value}`;
}

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">I aM Dee Bee</a>
    <form className="form-inline my-2 my-lg-0" onSubmit={search}>
      <input className="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
);

export default Header;
