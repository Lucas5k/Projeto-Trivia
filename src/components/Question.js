import { decode } from 'he';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionQuestionChosen } from '../redux/actions';
import './Question.css';

class Question extends Component {
  handleHighlightQuestions = (correctAnswer, currAnswer) => {
    const { questionChosen } = this.props;
    if (!questionChosen) return '';
    if (correctAnswer === currAnswer) return 'Question-right';
    if (correctAnswer !== currAnswer) return 'Question-wrong';
  };

  handlePickQuestion = (option, rightAnswer, difficulty, timer) => {
    const { pickQuestion } = this.props;
    const multipliers = { hard: 3, medium: 2, easy: 1 };
    const isRight = option === rightAnswer;
    const minPoints = 10;
    const score = isRight ? minPoints + (multipliers[difficulty] * timer) : 0;
    pickQuestion(score);
  };

  render() {
    const { timer, currQuestion, answers, questionChosen } = this.props;

    return (
      <>
        {!currQuestion && <p>Loading...</p>}
        {currQuestion && (
          <section className="Question">
            <h1 data-testid="question-category">{currQuestion.category}</h1>
            <h4 data-testid="question-text">{decode(currQuestion.question)}</h4>
            <ul data-testid="answer-options">
              {answers.map((option, index) => (
                <button
                  key={ option }
                  className={ this.handleHighlightQuestions(
                    currQuestion.correct_answer,
                    option,
                  ) }
                  data-testid={
                    option !== currQuestion.correct_answer
                      ? `wrong-answer-${index}`
                      : 'correct-answer'
                  }
                  type="button"
                  onClick={ () => this.handlePickQuestion(
                    option,
                    currQuestion.correct_answer,
                    currQuestion.difficulty,
                    timer,
                  ) }
                  disabled={ timer === 0 || questionChosen }
                >
                  {decode(option)}
                </button>
              ))}
            </ul>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questionChosen: state.game.questionChosen,
  timer: state.game.timer,
});

const mapDispatchToProps = (dispatch) => ({
  pickQuestion: (score) => dispatch(actionQuestionChosen(score)),
});

Question.propTypes = {
  currQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  answers: PropTypes.arrayOf(PropTypes.string),
  pickQuestion: PropTypes.func.isRequired,
  questionChosen: PropTypes.bool.isRequired,
  timer: PropTypes.number.isRequired,
};

Question.defaultProps = {
  currQuestion: undefined,
  answers: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
