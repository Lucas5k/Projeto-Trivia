import React, { Component } from 'react';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import Question from '../components/Question';

class Game extends Component {
  render() {
    return (
      <main>
        <Header />
        <Question />
        <NextButton />
      </main>
    );
  }
}

export default Game;
