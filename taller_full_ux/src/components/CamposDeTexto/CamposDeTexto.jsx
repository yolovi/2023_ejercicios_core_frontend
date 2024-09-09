import PropTypes from 'prop-types';
import React from 'react';
import './CamposDeTexto.css';
import { Box } from '../Box/Box';
export const CamposDeTexto = ({ 
  state, 
  className, 
  text="",
  line = 'line-1.svg' 
}) => {
  return (
    <div className={`campos-de-texto ${className}`}>
      <div className={`group ${state}`}>
        <div className="overlap-group">
          {['active-web', 'default', 'error'].includes(state) && (
            <div className="text-wrapper">Ej. realtor@valencia.com</div>
          )}
          {state === 'focus-web' && (
            <img className="line" alt="Line" src={line} />
          )}
        </div>
        <div className="div">{text}</div>
        //TODO:
        <Box />
      </div>
    </div>
  );
};
CamposDeTexto.propTypes = {
  state: PropTypes.oneOf(['active-web', 'error', 'focus-web', 'default']),
  line: PropTypes.string,
  text: PropTypes.string,
};
