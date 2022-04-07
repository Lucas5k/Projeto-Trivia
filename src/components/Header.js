import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerScore from './PlayerScore';

class Header extends Component {
  render() {
    const { name, score, gravatarEmail } = this.props;
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` } data-testid="header-profile-picture" alt="avatar" />
        <h2 data-testid="header-player-name">{ name }</h2>
        <span data-testid="header-score">{ score }</span>
        <PlayerScore />
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.string,
  avatar: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
});

export default connect(mapStateToProps, null)(Header);
