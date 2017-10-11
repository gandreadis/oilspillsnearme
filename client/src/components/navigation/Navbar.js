import classNames from "classnames";
import React from 'react';
import {Link, withRouter} from "react-router-dom";

export const NavItem = withRouter(props => <NavItemComponent {...props} />);

const NavItemComponent = ({route, children, location}) => (
  <li
    className={classNames(
      "nav-item",
      location.pathname === route ? "active" : undefined
    )}
  >
    <Link to={route} className="nav-link">
      {children}
    </Link>
  </li>
);

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark"
    style={{backgroundColor: "#473220"}}
  >
    <div className="container">
      <Link to="/" className="navbar-brand">oilspillsnear.me</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <NavItem route="/map">
            Map
          </NavItem>
          <NavItem route="/take-action">
            Take Action
          </NavItem>
          <NavItem route="/about">
            About
          </NavItem>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
