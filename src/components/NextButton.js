import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionNextRound } from '../redux/actions';

class NextButton extends Component {
  render() {
    const { goToNextRound } = this.props;

    return (
      <button data-testid="btn-next" type="button" onClick={ goToNextRound }>
        NextButton
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToNextRound: () => dispatch(actionNextRound()),
});

NextButton.propTypes = {
  goToNextRound: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NextButton);
