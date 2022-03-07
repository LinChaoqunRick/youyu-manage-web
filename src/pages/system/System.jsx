import React, {useEffect} from 'react';
import './System.scss';
import UMenu from "@/components/menu/UMenu";
import route from 'config/route/system'

const System = (props) => {

  // componentDidMount
  useEffect(() => {

  }, [])

  return <div className={"system-container"}>
    <UMenu menuList={route[1].routes} title={'系统'}/>
    {props.children}
  </div>
}

export default System
