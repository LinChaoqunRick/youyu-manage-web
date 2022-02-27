import React from 'react'
import './footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className={'footer-container'}>
        <div className={'copyright'}>Copyright© 有语 2020-2021</div>
        <a href='https://beian.miit.gov.cn/'>闽ICP备2021002248号-1</a>
      </div>
    )
  }
}

export default Footer
