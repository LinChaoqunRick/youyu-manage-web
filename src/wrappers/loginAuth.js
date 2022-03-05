import { Redirect } from 'umi';
import Cookie from 'js-cookie';

export default (props) => {
  const token = Cookie.get('token');
  if (token) {
    return <Redirect to="/home" />;
  } else {
    return <div>{ props.children }</div>;
  }
}
