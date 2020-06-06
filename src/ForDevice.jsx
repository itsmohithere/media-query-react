import React from 'react';
import PropTypes from 'prop-types';
import MediaQueryContext from './MediaQueryCtx';

export default function ForDevice({ children, deviceName }) {
  const GetDeviceScreen = ({ screenSize }) => {
    const { width } = window.screen;
    const { minWidth, maxWidth } = screenSize[deviceName];

    if (width >= minWidth && width <= maxWidth) {
      return children;
    }
    return null;
  };

  const GetMultipleDeviceScreen = ({ screenSize }) => {
    const { width } = window.screen;

    const hasScreen = (element) => {
      const { minWidth, maxWidth } = screenSize[element];
      return width >= minWidth && width <= maxWidth;
    };

    if (deviceName.some(hasScreen)) {
      return children;
    }
    return null;
  };

  return (
    <MediaQueryContext.Consumer>
      { (value) => {
        if (typeof deviceName === 'object') {
          return <GetMultipleDeviceScreen screenSize={value} />;
        }
        return <GetDeviceScreen screenSize={value} />;
      }}
    </MediaQueryContext.Consumer>
  );
}

ForDevice.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  deviceName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
