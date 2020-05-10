import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';

import { ThemeContext } from '../context/ThemeContext';

import '../../styles/main.scss';

import favicon from '../../static/favicon.png';

import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    if (theme.dark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Navigation />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
