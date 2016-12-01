import React from 'react';
import Radium from 'radium';
import colors from 'colors';


@Radium
export default class ArtistBio extends React.PureComponent { 
  render() {
    return (
      <p
        style={[styles.base,]}>
        David Robert Jones, known professionally as David Bowie, was an English singer, songwriter and actor. He was a figure in popular music for over five decades, regarded by critics and musicians as an innovator, particularly for his work in the 1970s.   
        <a 
        href="http://wikipedia.it" 
        style={[styles.a,]}>
          More on Wikipedia…
        </a>
      </p>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  base: {
  margin: '16px auto',
  fontFamily: 'San Francisco Display',
  fontWeight: '300',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#4A4A4A',
  textAlign: 'left',
  },
  a: {
  textDecoration: 'none',
  margin: '0 0 0 4px',
  fontWeight: '600',
  color: '#4990E2',

  },
};
