import React from "react";
import { NavLink } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <p className='Subtitle'>
          San Francisco Privately Owned Public Open Spaces
        </p>

        <nav aria-label='Main navigation'>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            activeClassName='nav-link-active'
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            activeClassName='nav-link-active'
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            activeClassName='nav-link-active'
            to='/subscribe'
          >
            Subscribe
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Title;
