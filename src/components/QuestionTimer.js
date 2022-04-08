import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDecreaseTimer } from '../redux/actions';

class QuestionTimer extends Component {
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { timer } = this.props;
    if (timer === 0) clearInterval(this.intervalID);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTimer = () => {
    const { decreaseTimer } = this.props;
    const second = 1000;

    this.intervalID = setInterval(decreaseTimer, second);
  }

  render() {
    const { timer } = this.props;

    return (
      <span>{timer}</span>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.game.timer,
});

const mapDispatchToProps = (dispatch) => ({
  decreaseTimer: () => dispatch(actionDecreaseTimer()),
});

QuestionTimer.propTypes = {
  timer: PropTypes.number.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTimer);
