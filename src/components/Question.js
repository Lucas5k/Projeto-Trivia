import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTimer from './QuestionTimer';

class Question extends Component {
  render() {
    const { currQuestion } = this.props;
    const shuffle = 0.5;

    return (
      <section>
        <h1 data-testid="question-category">{currQuestion.category}</h1>
        <h4 data-testid="question-text">{currQuestion.question}</h4>
        <ul>
          {[currQuestion.correct_answer, ...currQuestion.incorrect_answers]
            .sort(() => Math.random() - shuffle)
            .map((option, index) => (
              <li key={ index }>
                <button
                  data-testid={
                    option !== currQuestion.correct_answer
                      ? `wrong-answer-${index}`
                      : 'correct - answer'
                  }
                  type="button"
                >
                  {option}
                </button>
              </li>
            ))}
        </ul>
        <QuestionTimer />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  questionMap: state.ranking.results,
});

Question.propTypes = {
  currQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default connect(mapStateToProps)(Question);
