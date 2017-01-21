import { connect } from 'react-redux';

import Board from '../components/Board';

function mapStateToProps({ boardValues, isGameOver }, ownProps) {
    return Object.assign({}, ownProps, {
        boardValues,
        isGameOver,
    });
}

export default connect(mapStateToProps)(Board);
