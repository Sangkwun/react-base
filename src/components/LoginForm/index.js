import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/users';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        usernameLogin: (email, password) => {
            dispatch(userActions.usernameLogin(email, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);
