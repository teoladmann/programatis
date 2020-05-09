import React from 'react';
import { Helmet } from 'react-helmet';

import '../../styles/main.scss';

import favicon from '../../static/favicon.png';

import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
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
