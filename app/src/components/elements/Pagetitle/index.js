import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const Pagetitle = ({ title }) => (
  <>
    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
      <h2 className="section-title">{title}</h2>
    </ScrollAnimation>
    <div className="spacer" data-height="60"></div>
  </>
);

Pagetitle.propTypes = {
  title: PropTypes.string,
};

export default Pagetitle;
