import React, { Component } from 'react';

import Square from './Square';

export default class Board extends Component {

    // Connect
    // generate squares
    render() {
        return (
            <div>
                <Square x="4" y="6" value="2" />
            </div>
        );
    }


}

