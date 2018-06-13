import React, {Component} from 'react';
import ScoreIndicator from '../ScoreIndicator/ScoreIndicator';

import './scorechanger.scss';

export default class ScoreChanger extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 250,
      newScore: 0,
    }
  }

  updateScore = (event) => {
    const {newScore} = this.state;

    this.setState({
      score: newScore,
    })
  }

  handleScoreChange = (event) => {
    const {value} = event.target;

    this.setState({
      newScore: value ? parseInt(value) : 0
    });
  }

  render() {
    const {score, newScore} = this.state;

    return (
      <div>
        <ScoreIndicator
          score={score}
        />
        <div className={'score-input'}>
          <input
            type="number"
            min={0}
            max={700}
            step={100}
            value={newScore}
            onChange={this.handleScoreChange}
          />
          <button
            onClick={this.updateScore}
          >
            Update Score
          </button>
        </div>
      </div>
    );
  }
}
