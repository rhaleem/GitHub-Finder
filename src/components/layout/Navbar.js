import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// Set default props
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

// Check prop types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
