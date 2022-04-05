import React, { Component } from 'react';
import IndividualRanking from '../components/IndividualRanking';

class Ranking extends Component {
  render() {
    return (
      <main>
        <ol>
          <IndividualRanking />
        </ol>
      </main>
    );
  }
}

export default Ranking;
