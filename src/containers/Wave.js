import { connect } from 'react-redux';

import { toggleWave } from '../actions';

import Wave from '../components/Wave';

function mapStateToProps({ boardValues, isGameOver, isWaveInProgress }, ownProps) {
    return Object.assign({}, ownProps, {
        isWaveInProgress,
    });
}

function mapDispatchToProps (dispatch) {
    return {
        toggleWave: () => dispatch(toggleWave()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wave);
