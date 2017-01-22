import { connect } from 'react-redux';

import Login from '../components/login';
import { connectChannel } from '../actions';

function mapStateToProps({ }, ownProps) {
    return Object.assign({}, ownProps, {
    });
}

function mapDispatchToProps (dispatch) {
    return {
        connectChannel: (channel) => dispatch(connectChannel(channel)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
