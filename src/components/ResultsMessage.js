import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsMessage extends Component {
  render() {
    const { assertions } = this.props;
    const minRightAnswers = 3;

    return (
      <p data-testid="feedback-text">
        {assertions >= minRightAnswers ? 'Well Done!' : 'Could be better...'}
      </p>
    );
  }
}

const mapStateToProps = ({ player: { assertions } }) => ({
  assertions,
});

ResultsMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(ResultsMessage);
