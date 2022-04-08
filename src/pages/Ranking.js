import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualRanking from '../components/IndividualRanking';
import { actionGetRanking, actionResetGame } from '../redux/actions';

class Ranking extends Component {
  componentDidMount() {
    const { getRanking } = this.props;
    getRanking();
  }

  handleClick = () => {
    const { resetGame, history } = this.props;
    resetGame();
    history.push('/');
  };

  render() {
    const { ranking } = this.props;
    return (
      <main>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {ranking
            .sort((prev, curr) => curr.score - prev.score)
            .map((record, index) => (
              <IndividualRanking
                key={ index }
                index={ index }
                { ...record }
              />
            ))}
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

const mapStateToProps = (state) => ({
  ranking: state.ranking,
});

const mapDispatchToProps = (dispatch) => ({
  getRanking: () => dispatch(actionGetRanking()),
  resetGame: () => dispatch(actionResetGame()),
});

Ranking.propTypes = {
  getRanking: PropTypes.func,
  resetGame: PropTypes.func,
  ranking: PropTypes.arrayOf(PropTypes.any),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
