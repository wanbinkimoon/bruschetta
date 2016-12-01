import React from 'react';
import Radium from 'radium';
import colors from 'colors';

import AlbumList from './Background/AlbumList';
import ArtistAvailable from './Background/ArtistAvailable';
import ArtistBio from './Background/ArtistBio';
import ArtistDate from './Background/ArtistDate';
import ArtistName from './Background/ArtistName';
import ArtistRole from './Background/ArtistRole';
import ProfilePic from './Background/ProfilePic';

@Radium
export default class Background extends React.PureComponent { 
  render() {
    return (
      <div
        style={[styles.base,]}>
        <ProfilePic />
        <ArtistName />
        <ArtistRole />
        <ArtistAvailable />
        <hr
          style={[styles.hr,]} />
        <ArtistDate />
        <ArtistBio />
        <AlbumList />
      </div>
    );
  }
}

// styling for the Faceted wrap
let styles = {
  base: {
    display: 'block',
    position: 'absolute',
    bottom: '0px',
    left: '10px',
    margin: 'auto',
    width: '355px',
    height: '496px',
    textAlign: 'center',
    padding: '0 40px',
    backgroundImage: 'linear-gradient(89deg, #F5F5F5 0%, #FFFFFF 49%, #F5F5F5 100%)',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
    borderRadius: '4px',
  },
  hr: {
    border: '1px solid #979797',
    margin: '16px 0',
  },
};
