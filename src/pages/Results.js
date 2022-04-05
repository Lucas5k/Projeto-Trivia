import React, { Component } from 'react';
import DisplayRankingButton from '../components/DisplayRankingButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';

class Results extends Component {
  render() {
    return (
      <main>
        <ResultsMessage />
        <PlayerFinalScore />
        <DisplayRankingButton />
      </main>
    );
  }
}

export default Results;
