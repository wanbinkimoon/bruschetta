import React from 'react';
import Radium from 'radium';
import colors from 'colors';


@Radium
export default class ArtistAvailable extends React.PureComponent { 
  render() {
    return (
      <div
        style={[styles.base,]}>
        <h6
        style={[styles.h6,]}>
          Available on
        </h6>
        <ul
        style={[styles.ul,]}>
          <li
          style={[styles.li,]}>
            youtube
          </li>
          <li
          style={[styles.li,]}>
            spotify
          </li>
          <li
          style={[styles.li,]}>
            apple music
          </li>
        </ul>
      </div>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  h6: {
  margin: '8px auto',
  fontFamily: 'San Francisco Display',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '16px',
  color: '#4A4A4A',
  },
  ul: {
    listStyle: 'none',
    margin: '0 auto',
    padding: '0',
    display: 'table',
  },
  li: {
    display: 'inline-block',
    margin: '8px',
    overflow: 'hidden',
    width: '24px',
    height: '24px',
    background: '#D8D8D8',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
    borderRadius: '2px',
  }
};
