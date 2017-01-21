import React, { Component } from 'react';
import {
    DIGGING_TOOL,
    BUILDING_TOOL,
} from '../actions';


export default function Toolbox(props) {
    const { select, selectedTool } = props;

    return (
        <div>
            <a
                href
                onClick={(e) => { e.preventDefault(); select(DIGGING_TOOL); }}>
                Digg { selectedTool === DIGGING_TOOL ? '(selected)' : '' }
            </a>
            <a
                href
                onClick={(e) => { e.preventDefault(); select(BUILDING_TOOL); }}>
                Build { selectedTool === BUILDING_TOOL ? '(selected)' : '' }
            </a>
        </div>
    );
}
