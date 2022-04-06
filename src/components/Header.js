import React, { Component } from 'react';
import PlayerScore from './PlayerScore';

class Header extends Component {
  render() {
    return (
      <header>
        <PlayerScore />
      </header>
    );
  }
}

export default Header;
