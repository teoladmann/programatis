import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { ThemeContext } from '../context/ThemeContext';

const Navigation = () => {
  const [theme, toggleDark] = useContext(ThemeContext);

  return (
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">
          <span className="text">
            <span className="emoji" role="img" aria-label="Computadora">
              💻
            </span>
            Programatis
          </span>
        </Link>
      </div>
      <div className="links">
        <Link to="/acerca">
          <span>Acerca</span>
        </Link>
        <button
          className="button-theme"
          onClick={() => toggleDark()}
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
        >
          {theme && theme.dark ? (
            <span role="img" aria-label="Sun Emoji">
              ☀️
            </span>
          ) : (
            <span role="img" aria-label="Moon Emoji">
              🌙
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
