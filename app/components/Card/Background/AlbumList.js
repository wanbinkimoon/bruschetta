import React from 'react';
import Radium from 'radium';
import colors from 'colors';


@Radium
export default class ArtistName extends React.PureComponent { 
  render() {
    return (
       <ul
      style={[styles.ul,]}>
        <li
        style={[styles.li,]}>
          album 1
        </li>
        <li
        style={[styles.li,]}>
          album 2
        </li>
        <li
        style={[styles.li,]}>
          album 3
        </li>
      </ul>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  ul: {
    listStyle: 'none',
    margin: '0 auto',
    padding: '0',
    display: 'table',
  },
  li: {
    display: 'inline-block',
    margin: '4px',
    overflow: 'hidden',
    width: '82px',
    height: '82px',
    background: '#D8D8D8',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
    borderRadius: '2px',
  }
};
