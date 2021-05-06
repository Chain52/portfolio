import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Colin Hain" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src={logoSource} alt="Colin Hain" />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  logoSource: PropTypes.string,
  bootstrapNav: PropTypes.bool,
};
