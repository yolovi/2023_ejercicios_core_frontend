import PropTypes from 'prop-types';
import React from 'react';
import './Botones.css';
export const Botones = ({ state, size, className, text = 'Acceder' }) => {
  return (
    <div className={`botones ${state} ${className}`}>
      <div className="acceder">{text}</div>
    </div>
  );
};
Botones.propTypes = {
  state: PropTypes.oneOf(['default', 'disable', 'press', 'hover']),
  size: PropTypes.oneOf(['medium']),
  text: PropTypes.string,
};
