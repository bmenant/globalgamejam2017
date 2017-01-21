import { connect } from 'react-redux';

import Square from '../components/Square';
import { build, digg } from '../actions';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps (dispatch) {
    return { build, digg };
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
