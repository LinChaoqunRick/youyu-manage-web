import React from 'react'
import {Progress} from 'antd';
import './DateItem.scss';
import {Link} from "react-router-dom";

class DataItem extends React.Component {


  render() {
    return (
      <Link to={this.props.to} className={'data-item'}>
        <Progress strokeColor={this.props.color} type="circle" width={170} format={() => `${this.props.amount}${this.props.unit}`} percent={100}/>
        <div className={'item-name'}>{this.props.name}</div>
      </Link>
    )
  }
}

export default DataItem
