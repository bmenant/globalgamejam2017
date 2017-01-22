import React, { Component, PropTypes} from 'react';
import Square from '../containers/Square';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.connection = this.connection.bind(this);

    }
	connection(event) {
        event.preventDefault();

        console.log(this.props);
        var x = document.getElementById("channel").value;
        console.log(x);
        connectChannel(x)
    }

    render() {
        return (
        	<div>
                <form>
                  <p>Channel:</p>
                  <input type="text" name="channel" id="channel" />
                  <button onClick= {this.connection}>Cliquez sur moi :)</button> 
                </form> 

            </div>
		);
    }
}

Login.propTypes = {
    connectChannel: PropTypes.func.isRequired,
};

