import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionNextRound } from '../redux/actions';
import QuestionTimer from './QuestionTimer';

class NextButton extends Component {
  handleClick = () => {
    const { round, goToNextRound, history } = this.props;
    const finalRound = 4;
    if (round < finalRound) goToNextRound();
    if (round === finalRound) history.push('/game/results');
  }

  render() {
    const { questionChosen } = this.props;

    return (
      <>
        { questionChosen && (
          <button data-testid="btn-next" type="button" onClick={ this.handleClick }>
            Next
          </button>
        ) }
        { !questionChosen && <QuestionTimer /> }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  round: state.game.round,
  questionChosen: state.game.questionChosen,
});

const mapDispatchToProps = (dispatch) => ({
  goToNextRound: () => dispatch(actionNextRound()),
});

NextButton.propTypes = {
  round: PropTypes.number.isRequired,
  goToNextRound: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  questionChosen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
