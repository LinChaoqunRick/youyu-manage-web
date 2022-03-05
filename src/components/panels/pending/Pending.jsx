import React from 'react'
import { Button } from 'antd';
import './Pending.scss'

class Pending extends React.Component {
  render() {
    return (
      <div className={'pending-container'}>
        <div className={'pending-event message'}>
          <div className={'caption'}>
             当前还有<br/>100条
             <br/>留言待处理
          </div>
          <Button type="primary">去处理</Button>
        </div>
        <div className={'pending-event tip-off'}>
          <div className={'caption'}>
            当前还有<br/>100条
            <br/>举报待处理
          </div>
          <Button type="primary">去处理</Button>
        </div>
      </div>
    )
  }
}

export default Pending
