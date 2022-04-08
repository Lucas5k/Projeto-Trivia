import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import Question from '../components/Question';

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
    const { questions, currRound, questionChosen } = this.props;

    return (
      <main>
        <Header />
        <Question
          currQuestion={ questions[currRound] }
          answers={ this.shuffleAnswers(questions[currRound]) }
        />
        { questionChosen && <NextButton /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  currRound: state.game.round,
  questionChosen: state.game.questionChosen,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currRound: PropTypes.number.isRequired,
  questionChosen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Game);
