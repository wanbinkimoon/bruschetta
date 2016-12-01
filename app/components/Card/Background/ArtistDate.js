import React from 'react';
import Radium from 'radium';
import colors from 'colors';


@Radium
export default class ArtistRole extends React.PureComponent { 
  render() {
    return (
      <h6
        style={[styles.base,]}>
        1947 – 2016
      </h6>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  base: {
  fontFamily: 'San Francisco Display',
  margin: '0 auto',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '16px',
  color: '#4A4A4A',
  },
};
