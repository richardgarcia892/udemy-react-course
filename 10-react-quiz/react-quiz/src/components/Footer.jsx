import React from 'react';
import propsTypes from 'prop-types';

Footer.propTypes = {
  children: propsTypes.node.isRequired
}

function Footer({ children }) {
  return (
    <footer className='footer'>
      {children}
    </footer>
  );
}

export default Footer;