import React, {Component} from 'react';

import './scoreindicator.scss';

export default class ScoreLabel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0
    }
  }

  componentDidMount() {
    const {score} = this.props;

    this.handleScoreCounterUpdates(0, score);
  }

  componentDidUpdate(prevProps) {
    const {score: oldScore} = prevProps;
    const {score: newScore} = this.props;

    this.handleScoreCounterUpdates(oldScore, newScore);
  }

  handleScoreCounterUpdates = (oldScore, newScore) => {
    const scoreDiff = newScore - oldScore;

    if (scoreDiff && !this.counter) {
      this.counter = 19;
      this.intervalId = setInterval(() => {
        let score = this.state.score + scoreDiff / 19;
        this.counter = this.counter - 1;

        if (!this.counter) {
          score = newScore;
          clearInterval(this.intervalId);
        }

        this.setState({score});
      }, 50);
    }
  }

  render() {
    const {score} = this.state;

    return (
      <p className={'score-credit'}>{parseInt(score)}</p>
    );
  }
}

ScoreLabel.defaultProps = {
  score: 0
}
