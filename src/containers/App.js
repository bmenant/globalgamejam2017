import { connect } from 'react-redux';

import App from '../components/App';

function mapStateToProps({ isGameStarted }, ownProps) {
    return Object.assign({}, ownProps, { isGameStarted });
}

export default connect(mapStateToProps)(App);