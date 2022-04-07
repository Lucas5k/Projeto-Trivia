import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionTimer from './QuestionTimer';

class Question extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    const { questionMap } = this.props;
    console.log(this.props);

    const handleClickQuestion = () => {
      const { questionMap } = this.props;
      this.setState((previousState) => ({
        count: previousState.count + 1,
      }));
      const { count } = this.state;
      console.log(questionMap[count].question);
    };
    const { count } = this.state;
    const firstQuestion = questionMap[count];
    const test = Object.entries(firstQuestion);
    console.log(test);

    return (
      <section>
        {
          test && test.map((item, index) => {
            const { category, question } = item;
            return (
              <section key={ index }>
                <h1 data-testid="question-category">{ category }</h1>
                <h4 data-testid="question-text">{ question }</h4>
                <button type="button">{ item.correct_answer }</button>
                <ul>
                  {
                    item.incorrect_answers.map((option, i) => (
                      <section key={ i }>
                        <ul>
                          <button type="button">{ option }</button>
                        </ul>
                      </section>
                    ))
                  }
                </ul>
              </section>
            );
          })
        }
        <button
          type="button"
          onClick={ handleClickQuestion }
        >
          Next
        </button>
        <QuestionTimer />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  questionMap: state.ranking.results,
});

Question.propTypes = {
  questionMap: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Question);
