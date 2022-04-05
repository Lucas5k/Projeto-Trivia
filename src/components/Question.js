import React, { Component } from 'react';
import QuestionTimer from './QuestionTimer';

class Question extends Component {
  render() {
    return (
      <section>
        Question
        <QuestionTimer />
      </section>
    );
  }
}

export default Question;
