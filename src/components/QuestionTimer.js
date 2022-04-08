import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionNextRound } from '../redux/actions';

class QuestionTimer extends Component {
  constructor() {
    super();

    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTimer = () => {
    const { timer } = this.state;
    const { goToNextRound } = this.props;
    const second = 1000;

    this.intervalID = setInterval(() => {
      if (timer > 0) this.setState({ timer: timer - 1 });
      if (timer === 0) goToNextRound();
    }, second);
  }

  render() {
    const { timer } = this.state;

    return (
      <span>{timer}</span>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToNextRound: () => dispatch(actionNextRound()),
});

QuestionTimer.propTypes = {
  goToNextRound: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(QuestionTimer);
