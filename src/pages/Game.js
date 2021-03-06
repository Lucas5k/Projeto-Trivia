import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Question from '../components/Question';
import forms from '../assets/imgs/animated-forms.svg';
import './Game.css';

class Game extends Component {
  shuffleAnswers = (currQuestion) => {
    if (currQuestion) {
      const shuffle = 0.5;
      return [
        currQuestion.correct_answer,
        ...currQuestion.incorrect_answers,
      ].sort(() => Math.random() - shuffle);
    }
  };

  render() {
    const { questions, playerName, currRound, history } = this.props;

    return (
      <main className="Game">
        <img className="Game-background-forms" src={ forms } alt="" />
        { playerName === '' && <Redirect to="/" /> }
        <Header history={ history } isGameScreen />
        <Question
          currQuestion={ questions[currRound] }
          answers={ this.shuffleAnswers(questions[currRound]) }
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  currRound: state.game.round,
  playerName: state.player.name,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currRound: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Game);
