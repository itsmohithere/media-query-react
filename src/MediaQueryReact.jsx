import React from 'react';
import PropTypes from 'prop-types';
import MediaQueryContext from './MediaQueryCtx';

export default function MediaQueryReact({ mediaQueries, children }) {
  return (
    <MediaQueryContext.Provider value={mediaQueries}>
      {children}
    </MediaQueryContext.Provider>
  );
}

MediaQueryReact.defaultProps = {
  mediaQueries: {
    mobile: {
      min: 320,
      max: 480,
    },
    mobileLandscape: {
      min: 481,
      max: 767
    },
    tablet: {
      min: 768,
      max: 1024,
    },
    desktop: {
      min: 1025,
      max: 2500,
    },
  },
};

MediaQueryReact.propTypes = {
  mediaQueries: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
