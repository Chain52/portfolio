import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

export default function Timeline({ education }) {
  const { years, title, content } = education;
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce>
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

Timeline.propTypes = {
  education: PropTypes.shape({
    years: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};
