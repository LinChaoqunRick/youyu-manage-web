import React from 'react';
import Navigation from "../../components/navigation/Navigation";

import './main.scss'

function Main(props) {
  return (
    <div className={'main-container'}>
      <Navigation/>
      <div className={'outlet'}>
        {props.children}
      </div>
    </div>
  )
}

export default Main;
