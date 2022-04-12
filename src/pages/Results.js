import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DisplayRankingButton from '../components/DisplayRankingButton';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';
import './Results.css';

class Results extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="Results">
        <Header history={ history } isGameScreen={ false } />
        <ResultsMessage />
        <section className="Results-info">
          <PlayerFinalScore />
          <DisplayRankingButton history={ history } />
          <PlayAgainButton history={ history } />
        </section>
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
