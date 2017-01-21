import { connect } from 'react-redux';

import Square from '../components/Square';
import { build, digg } from '../actions';

function mapStateToProps({ selectedTool }, ownProps) {
    return Object.assign({}, ownProps, {
        selectedTool,
    });
}

function mapDispatchToProps (dispatch) {
    return {
        build: (coordinates, value) => dispatch(build(coordinates, value)),
        digg: (coordinates, value) => dispatch(digg(coordinates, value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
