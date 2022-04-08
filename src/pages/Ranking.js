import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualRanking from '../components/IndividualRanking';
import { actionGetRanking } from '../redux/actions';

class Ranking extends Component {
  componentDidMount() {
    const { getRanking } = this.props;
    getRanking();
  }

  render() {
    const { ranking } = this.props;
    return (
      <main>
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
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  ranking: state.ranking,
});

const mapDispatchToProps = (dispatch) => ({
  getRanking: () => dispatch(actionGetRanking()),
});

Ranking.propTypes = {
  getRanking: PropTypes.func,
  ranking: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
