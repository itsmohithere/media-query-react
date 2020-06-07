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
      minWidth: 320,
      maxWidth: 480,
    },
    mobileLandscape: {
      minWidth: 481,
      maxWidth: 767,
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1024,
    },
    desktop: {
      minWidth: 1025,
      maxWidth: 2500,
    },
  },
};

MediaQueryReact.propTypes = {
  mediaQueries: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
