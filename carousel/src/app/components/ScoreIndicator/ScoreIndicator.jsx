import React, {Component} from 'react';
import './scoreindicator.scss';
import ScoreLabel from './ScoreLabel'

export default class ScoreIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strokeLength: 0,
      svgKey: 0
    }
  }

  componentDidUpdate(prevProps) {
    const {score: oldScore} = prevProps;
    const {score: newScore} = this.props;

    if (oldScore !== newScore) {
      this.setState({
        svgKey: Math.random() * 909090
      });
    }
  }

  calculateStrokeLength = (score) => {
    return (score * 100) / 700;
  }

  render() {
    const {score} = this.props;
    const {svgKey} = this.state;
    const strokeLength = this.calculateStrokeLength(score);

    return (
      <div className={'score-indicator'}>
        <div className={'score-indicator-container'}></div>

        <div className={'score-indicator-info'}>
          <p>Your <b>credit score</b> is</p>
          <ScoreLabel score={score}/>
          <p className={'score-total'}>out of 700</p>
          <p className={'score-message'}><b>Looking bright</b></p>
        </div>

        <div className={'score-indicator-progress'}>
          <svg
            key={svgKey}
            className={'score-chart'}
            viewBox={'0 0 33.83098862 33.83098862'}
            width={400}
            height={400}
          >
            <circle
              className={'score-chart-circle'}
              stroke={'#00acc1'}
              strokeWidth={'1.2'}
              strokeDasharray={`${strokeLength},100`}
              strokeLinecap={'round'}
              fill={'none'}
              cx={'17'}
              cy={'17'}
              r={'15.5'}
            />
          </svg>
        </div>
      </div>
    );
  }
}

ScoreIndicator.defaultProps = {
  score: 0
}
