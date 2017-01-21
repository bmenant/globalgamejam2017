import { connect } from 'react-redux';

import Toolbox from '../components/Toolbox';
import { selectTool } from '../actions';

function mapStateToProps({ selectedTool }, ownProps) {
    return Object.assign({}, ownProps, {
        selectedTool,
    });
}

function mapDispatchToProps (dispatch) {
    return {
        select: (tool) => dispatch(selectTool(tool)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
