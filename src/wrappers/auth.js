import { Redirect } from 'umi';
import Cookie from 'js-cookie';

export default (props) => {
  const token = Cookie.get('token');
  if (token) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
