import { Redirect } from 'umi';
import Cookie from 'js-cookie';

export default (props) => {
  const token = Cookie.get('token');
  if (token) {
    return <Redirect to="/home" />;
  } else {
    return <div style={{height: "100%"}} className={'login-wrapper'}>{ props.children }</div>;
  }
}
