import { connect } from 'react-redux';

import Toolbox from '../components/Toolbox';
import { selectTool } from '../actions';

function mapStateToProps({ selectedTool, remainingActions }, ownProps) {
    return Object.assign({}, ownProps, {
        selectedTool,
        remainingActions,
    });
}

function mapDispatchToProps (dispatch) {
    return {
        select: (tool) => dispatch(selectTool(tool)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
