import React from 'react';
import Radium from 'radium';
import colors from 'colors';

import ArtistImg from './img/profile-pic.png';


@Radium
export default class ProfilePic extends React.PureComponent { 
  render() {
    return (
      <div
        style={[styles.base,]}>
        <img 
          style={[styles.img,]}
          src={ArtistImg} title="Profile pic" alt="Profile pic"/>
      </div>
    );

  }
}

// styling for the Faceted wrap
let styles = {
  base: {
    display: 'block',
    position: 'relative',
    height: '68px',
    width: '150px',
    margin: 'auto',
  },
  img: {
    display: 'block',
    postiion: 'relative',
    top: '-140px',
    margin: 'auto',
    verticalAlign: 'baseline',
    position: 'relative',
  },
};
