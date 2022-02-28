import React, {useEffect} from 'react';
import './user.scss';
import UMenu from "../../components/menu/UMenu";
import route from '../../../config/route/user'

const Blog = (props) => {

  // componentDidMount
  useEffect(() => {

  }, [])

  const rowClick = (record) => {
    console.log(record);
  }

  return <div className={"user-container"}>
    <UMenu menuList={route[1].routes} title={'用户'}/>
    {props.children}
  </div>
}


export default Blog
