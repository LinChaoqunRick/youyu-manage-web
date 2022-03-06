import React, {useState} from 'react';
import UChart from '@/components/chart/UChart'

import './Analysis.scss'

const Analysis = function () {
  const option1 = {
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

  const [option, setOption] = useState(option1);

  const changeData = () => {
    option1.series[0].data = [1000, 1000, 1000, 1000, 1000, 1000, 1000];
    // console.log(option1);
    setOption(Object.assign({},option1));

    // setOption({
    //   ...option,
    //   series: {
    //     ...option.series[0],
    //     data: [1000, 1000, 1000, 1000, 1000, 1000, 1000]
    //   }
    // })
  }

  return (
    <div className={'analysis-container'}>
      <button onClick={changeData}>按钮</button>
      <UChart option={option}/>
    </div>
  )
}

export default Analysis
