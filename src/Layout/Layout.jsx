import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Routes/Navbar.jsx';
import Footer from '../Routes/Footer.jsx';

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.object.isRequired,
};

export default Layout;
