import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionFinishTimer } from '../redux/actions';

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

  componentDidUpdate() {
    const { timer } = this.state;
    const { finishTimer } = this.props;

    if (timer === 0) {
      clearInterval(this.intervalID);
      finishTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTimer = () => {
    const second = 1000;

    this.intervalID = setInterval(
      this.setState((state) => ({ timer: state.timer - 1 })),
      second,
    );
  };

  render() {
    const { timer } = this.props;

    return <span>{timer}</span>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  finishTimer: () => dispatch(actionFinishTimer()),
});

QuestionTimer.propTypes = {
  timer: PropTypes.number.isRequired,
  finishTimer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTimer);
