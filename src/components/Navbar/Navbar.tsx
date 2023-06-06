import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => classNames('navbar-item', {
              'is-active': isActive,
            })}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => classNames('navbar-item', {
              'is-active': isActive,
            })}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};