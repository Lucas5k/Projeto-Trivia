import React, { Component } from 'react';
import DisplayRankingButton from '../components/DisplayRankingButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';
import Header from '../components/Header';

class Results extends Component {
  render() {
    return (
      <main>
        <Header />
        <ResultsMessage />
        <PlayerFinalScore />
        <DisplayRankingButton />
      </main>
    );
  }
}

export default Results;
