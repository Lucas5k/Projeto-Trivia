import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualRanking from '../components/IndividualRanking';

class Ranking extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <main>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          <IndividualRanking />
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Go Home
        </button>
      </main>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
