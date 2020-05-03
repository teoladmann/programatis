import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../data/SiteConfig';

import '../../styles/main.scss';

import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Navigation />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
