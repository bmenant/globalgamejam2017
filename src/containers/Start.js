import { connect } from 'react-redux';
import { startGame } from '../actions';

import Start from '../components/Start';

function mapDispatchToProps (dispatch) {
    return {
        startGame: (channel) => dispatch(startGame(channel)),
    };
}

export default connect(((state, ownProps) => ownProps), mapDispatchToProps)(Start);
