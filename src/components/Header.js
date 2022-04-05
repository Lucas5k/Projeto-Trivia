import React, { Component } from 'react';
import PlayerScore from './PlayerScore';
import SettingsButton from './SettingsButton';

class Header extends Component {
  render() {
    return (
      <header>
        <PlayerScore />
        <SettingsButton />
      </header>
    );
  }
}

export default Header;
