import React from 'react';
import Radium from 'radium';
import colors from 'colors';


@Radium
export default class ArtistName extends React.PureComponent { 
  render() {
    return (
      <h1
        style={[styles.base,]}>
        David Bowie
      </h1>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  base: {
  margin: '0 auto',
  fontFamily: 'Biryani',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '24px',
  color: '#4A4A4A',
  },
  img: {

  },
};
