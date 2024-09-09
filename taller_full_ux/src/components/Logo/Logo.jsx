// import PropTypes from 'prop-types';
// import React from 'react';
// import './Logo.css';
// import settingImage from './../../../public/assets';
// import image from './../../../public/assets';

// export const Logo = ({ size, className, setting = 'setting-1-2.svg' }) => {
//   return (
//     <div className={`logo ${size} ${className}`}>
//       <img
//         className="setting"
//         alt="Setting"
//         src={size === 'big' ? settingImage : size === 'small' ? image : setting}
//       />
//       <div className="text-wrapper">RealtorVLC1.0</div>
//     </div>
//   );
// };
// Logo.propTypes = {
//   size: PropTypes.oneOf(['small', 'medium', 'big']),
//   setting: PropTypes.string,
// };


import PropTypes from "prop-types";
import React from "react";
import './Logo.css';

export const Logo = ({ size, className, setting = "setting-1-2.svg" }) => {
    return (
        <div className={`logo ${size} ${className}`}>
            <img
                className="setting"
                alt="Setting"
                src={size === "big" ? "setting-1-2.svg" : size === "small" ? "image.svg" : setting}
            />
            <div className="text-wrapper">RealtorVLC1.0</div>
        </div>
    );
};

Logo.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "big"]),
    setting: PropTypes.string,
};
