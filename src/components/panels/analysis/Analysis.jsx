import React from 'react'
import ReactEcharts from 'echarts-for-react';

import './Analysis.scss'

class Analysis extends React.Component {
  render() {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    return (
      <div className={'analysis-container shadow'}>
        <ReactEcharts option={option} style={{height: '200px', width: '100%'}}/>
      </div>
    )
  }
}

export default Analysis
