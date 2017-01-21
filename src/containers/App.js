import { connect } from 'react-redux';

import App from '../components/App';
import { hello } from '../actions';

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        hello: (name) => {
            dispatch(hello(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);