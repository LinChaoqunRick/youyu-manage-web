import React from 'react';
import {Link} from "react-router-dom";
import DataItem from "../dataItem/DataItem";
import './DataOverview.scss'

class DataOverview extends React.Component {

  user = {
    name: '用户',
    amount: 10,
    unit: '个',
    color: '#006dfe'
  }

  render() {
    return (
      <div className={'data-overview shadow'}>
        <DataItem to='/user' normal='normal' name='当前用户总数' amount={10} unit={'个'} color={'#87ceeb'}/>
        {/*<DataItem/>*/}
        {/*<DataItem/>*/}
        {/*<DataItem/>*/}
      </div>
    )
  }
}

export default DataOverview
