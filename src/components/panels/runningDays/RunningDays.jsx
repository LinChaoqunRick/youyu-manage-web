import React from 'react'
import {Progress} from 'antd';
import './runningDays.scss'

class RunningDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      showDays: 0
    }
  }

  startDate = Date.parse('2020-10-01');
  runningDays = 50;
  ratio = 0;
  calculate = () => {
    let today = new Date();
    this.runningDays = (today - this.startDate) / (1 * 24 * 60 * 60 * 1000);
    let count = 0;
    this.ratio = this.runningDays / 100;

    let interval = setInterval(() => {
      count += this.runningDays / (600 / 10);
      if (count < this.runningDays) {
        this.setState({percent: (count / this.runningDays) * 100})
      } else {
        this.setState({percent: 100});
        clearInterval(interval)
      }
    }, 10)
  }

  componentDidMount() {
    this.calculate()
  }

  render() {
    return (
      <div className={'running-days'}>
        <Progress
          type="circle"
          strokeColor={{
            '0%': '#87ceeb',
            '100%': '#53a0d4',
          }}
          width={180}
          percent={this.state.percent}
          format={percent => `${Math.ceil(percent * this.ratio)} Days`}
        />
        {/*format={percent => `${Math.ceil(percent * this.ratio)} Days`}*/}
        <div className={'running-days-text'}>
          {/*<p>本站已运行{Math.ceil(this.runningDays)}天</p>*/}
          <p>本站已运行</p>
        </div>
      </div>
    )
  }
}

export default RunningDays
