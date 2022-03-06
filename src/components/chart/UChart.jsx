import React, {useEffect} from 'react';
import ReactEcharts from 'echarts-for-react';

const chart = function (props) {
  useEffect(() => {
    console.log(props.option);
  }, [props.option])

  return <ReactEcharts option={props.option}/>
}

export default chart;
