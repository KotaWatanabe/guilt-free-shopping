import { useAuth } from '../customHooks';
import { withRouter } from 'react-router-dom';

const Auth = props => useAuth(props) && props.children;

export default withRouter(Auth);
