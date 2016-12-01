import React from 'react';
import Radium from 'radium';
import colors from 'colors';

import Background from './Card/Background'

@Radium
export default class Card extends React.PureComponent { 
  render() {
    return (
      <div
        style={[styles.base,]}>
        <Background />
      </div>
    );
  }
}

// styling for the Faceted wrap
let styles = {
  base: {
    display: 'block',
    position: 'relative',
    margin: '16px auto',
    width: '375px',
    height: '667px',
    background: 'transparent'
  },
};
