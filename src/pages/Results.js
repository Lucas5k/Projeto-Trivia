import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayRankingButton from '../components/DisplayRankingButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';

class Results extends Component {
  render() {
    const { history } = this.props;

    return (
      <main>
        <Header history={ history } isGameScreen={ false } />
        <ResultsMessage />
        <PlayerFinalScore />
        <DisplayRankingButton history={ history } />
        <PlayAgainButton history={ history } />
      </main>
    );
  }
}
Results.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Results;
