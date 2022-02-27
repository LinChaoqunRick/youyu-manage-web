import React, {useEffect} from 'react';
import './blog.scss';
import UMenu from "../../components/menu/UMenu";
import route from '../../../config/route/blog'

const Blog = (props) => {

  // componentDidMount
  useEffect(() => {

  }, [])

  const rowClick = (record) => {
    console.log(record);
  }

  return <div className={"blog-container"}>
    <UMenu menuList={route[1].routes}/>
    {props.children}
  </div>
}


export default Blog
