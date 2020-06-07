[npm-badge]: https://img.shields.io/npm/v/react-media.svg?style=flat-square
[npm]: https://www.npmjs.com/package/media-query-react

# MEDIA-QUERY-REACT

## Information

[`media-query-react`](https://www.npmjs.com/package/media-query-react) is package for React to handle media query for the responsive design.

>Hooks supported

Easiest module to render componenets with media query.

## Installation
 ```console
 $ npm install --save media-query-react
 ```
## Import

 ```jsx
 import MediaQueryReact, { ForDevice, useMediaQuery } from 'media-query-react';
 ```

## Example

### With Hooks

  With hooks for now support two css property
    1. max-width
    2. min-width

  More css property will come in future update.

    ```jsx
    import React, { useEffect, useState } from 'react';
    import { useMediaQuery } from 'media-query-react';

    function Header() {
      const isDesktop = useMediaQuery({ query: 'min-width: 1024px' });
      const isTablet = useMediaQuery({ query: 'max-width: 1224px' });

      return (
        <Div className={`HeaderHeroContainer ${bgClass}`}>
          <ListUl>
            {
              isDesktop && (
                <ListLi className="contactButtonContainer">
                  <a href="mailto:itsmohitsaxenahere@gmail.com">
                    <Span>
                      Contact
                    </Span>
                  </a>
                </ListLi>
              )
            }
            {
              isTablet && <ListLi><NavLink to="/about">About</NavLink></ListLi>
            }
            <ListLi><NavLink to="/about">Work</NavLink></ListLi>
          </ListUl>
        </Div>
      );
    }

    export default Header;
    ```

### With Components
  
  Wrap application with MediaQueryReact HOC

    ```jsx
      import React from 'react';
      import MediaQueryReact from './commonComponents/HOC/src';

      // Entry point
      function App() {

        // pass screenSize object with custom device name and width.
        const screenSize = {
          mobile: { // custom device name
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
        };

        return (
          <CtxApp>
          {/* Wrap application with MediaQueryReact HOC and pass prop mediaQuaries */}
            <MediaQueryReact mediaQueries={screenSize}>
              <Routes />
            </MediaQueryReact>
          </CtxApp>
        );
      }

      export default hot(module)(App);

    ```
    use ForDevice to wrap your component which need to be responsive design and to pass your customize device name from screenSize object.

    ```jsx

      import React from 'react';
      import { ForDevice } from '../../commonComponents/HOC/src';

      function HeroSideBarHeader({ children }) {
        return (
          <Div>
            {/* Pass custom device name as an array for multiple devices */}
            <ForDevice deviceName={['tablet', 'desktop']}> 
              <Header /> {/* <Header /> component will display only on tablet and desktop */}
            </ForDevice>
            {/* Pass custom device name as an string for single device */}
            <ForDevice deviceName="mobile">
              <Sidebar /> {/* <Sidebar /> component will display only on mobile */}
            </ForDevice>
            { children }
          </Div>
        );
      }

      HeroSideBarHeader.propTypes = {
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      };

      export default withRouter(HeroSideBarHeader);

    ```

## API

In screenSize object numbers given as shorthand will be expanded to px (`768` will become `'768px'`).

With hooks possible CSS properties
  
  |Css property|value|
  |---|---|
  |max-width|1224px|
  |min-width|1024px|

More properties will add in future release.

## PROPS

|prop|description|type|
|---|---|---|
|mediaQueries|custom screen size and deivce name|object|
|deviceName|Pass screen name to render component|Array or String|

## LICENSE

MIT
