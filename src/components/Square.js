import React, { Component, PropTypes } from 'react';

export default class Square extends Component {

    render() {
        const { value } = this.props;
        return (
            <div>
                {value}
            </div>
        );
    }
}

Square.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    digg: PropTypes.func.isRequired,
    build: PropTypes.func.isRequired,
};