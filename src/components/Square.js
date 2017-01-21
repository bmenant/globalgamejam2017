import React, { Component, PropTypes } from 'react';

import {
    DIGGING_TOOL,
    BUILDING_TOOL,
} from '../actions';

import styles from './Square.css';

export default class Square extends Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        event.preventDefault();

        const { x, y, value, selectedTool, digg, build } = this.props;
        const coordonates = { x, y };

        if (Math.abs(value) < 3) {
            switch (selectedTool) {
                case DIGGING_TOOL:
                    digg(coordonates, value);
                    break;
                case BUILDING_TOOL:
                    build(coordonates, value);
                    break;
            }
        }
    }

    render() {
        const { value } = this.props;
        return (
            <a className={ styles.base } href onClick={this.clickHandler}>
                {value}
            </a>
        );
    }
}

Square.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    selectedTool: PropTypes.string,
    digg: PropTypes.func.isRequired,
    build: PropTypes.func.isRequired,
};