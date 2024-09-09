import PropTypes from 'prop-types';
import React from 'react';
// import { SizeMediumStateOff } from './SizeMediumStateOff';
// import { SizeMediumStateOn } from './SizeMediumStateOn';
// import { SizeMiniStateOff } from './SizeMiniStateOff';
// import { SizeSmallStateOn } from './SizeSmallStateOn';
import './CheckBox.css';
export const Checkbox = ({ size, state }) => {
  //   return (
  //     <>
  //       {state === 'on' && size === 'medium' && (
  //         <SizeMediumStateOn className="instance-node" />
  //       )}
  //       {state === 'on' && ['mini', 'small'].includes(size) && (
  //         <SizeSmallStateOn
  //           className={`${size === 'mini' ? 'class' : 'class-2'}`}
  //         />
  //       )}
  //       {state === 'off' && size === 'medium' && (
  //         <SizeMediumStateOff className="instance-node" />
  //       )}
  //       {state === 'off' && ['mini', 'small'].includes(size) && (
  //         <SizeMiniStateOff
  //           className={`${size === 'mini' ? 'class' : 'class-2'}`}
  //         />
  //       )}
  //     </>
  //  );
};
Checkbox.propTypes = {
  size: PropTypes.oneOf(['mini', 'medium', 'small']),
  state: PropTypes.oneOf(['off', 'on']),
};
