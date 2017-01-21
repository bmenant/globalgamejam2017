import { connect } from 'react-redux';

import Board from '../components/Board';

function mapStateToProps({ boardValues }, ownProps) {
    return Object.assign({}, ownProps, {
        boardValues,
    });
}

export default connect(mapStateToProps)(Board);
