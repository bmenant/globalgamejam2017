import { connect } from 'react-redux';

import Board from '../components/Board';

function mapStateToProps({ boardValues, isGameOver, isWaveInProgress }, ownProps) {
    return Object.assign({}, ownProps, {
        boardValues,
        isGameOver,
        isWaveInProgress,
    });
}

export default connect(mapStateToProps)(Board);
