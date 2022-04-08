import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionQuestionChosen } from '../redux/actions';
import QuestionTimer from './QuestionTimer';
import './Question.css';

class Question extends Component {
  handleHighlightQuestions = (correctAnswer, currAnswer) => {
    const { questionChosen } = this.props;
    if (!questionChosen) return '';
    if (correctAnswer === currAnswer) return 'Question-right';
    if (correctAnswer !== currAnswer) return 'Question-wrong';
  };

  render() {
    const { timerFinished, currQuestion, pickQuestion } = this.props;
    const shuffle = 0.5;

    return (
      <>
        {!currQuestion && <p>Loading...</p>}
        {currQuestion && (
          <section className="Question">
            <h1 data-testid="question-category">{currQuestion.category}</h1>
            <h4 data-testid="question-text">{currQuestion.question}</h4>
            <ul data-testid="answer-options">
              {[currQuestion.correct_answer, ...currQuestion.incorrect_answers]
                .sort(() => Math.random() - shuffle)
                .map((option, index) => (
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
                    onClick={ pickQuestion }
                    disabled={ timerFinished }
                  >
                    {option}
                  </button>
                ))}
            </ul>
            <QuestionTimer />
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questionChosen: state.game.questionChosen,
  timerFinished: state.game.timerFinished,
});

const mapDispatchToProps = (dispatch) => ({
  pickQuestion: () => dispatch(actionQuestionChosen()),
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
  pickQuestion: PropTypes.func.isRequired,
  questionChosen: PropTypes.bool.isRequired,
  timerFinished: PropTypes.bool.isRequired,
};

Question.defaultProps = {
  currQuestion: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
