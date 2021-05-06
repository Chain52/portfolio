import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const Counter = ({ counterItem, isVisible }) => {
  const { title, count, icon } = counterItem;
  const winWidth = window.innerWidth;
  const countQuery = () => {
    if (winWidth && winWidth > 767) {
      return <CountUp end={isVisible ? count : 0} />;
    }
    return <CountUp end={count} />;
  };
  const handleIcon = () => `icon ${icon}`;
  return (
    <div className="fact-item">
      <span className={handleIcon()}></span>
      <div className="details">
        <h3 className="mb-0 mt-0 number">
          <em className="count">{countQuery()}</em>
        </h3>
        <p className="mb-0">{title}</p>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counterItem: PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number,
    icon: PropTypes.string,
  }),
  isVisible: PropTypes.bool,
};

export default Counter;
