import PropTypes from 'prop-types';
import React, { Component } from 'react';

class IndividualRanking extends Component {
  render() {
    const { name, score, picture, index } = this.props;
    return (
      <li>
        <span data-testid={ `player-name-${index}` }>{ name }</span>
        <span data-testid={ `player-score-${index}` }>{ score }</span>
        <img src={ picture } alt={ name } />
      </li>
    );
  }
}

IndividualRanking.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  picture: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default IndividualRanking;
