import React, { Component } from 'react';
import {
    DIGGING_TOOL,
    BUILDING_TOOL,
} from '../actions';


export default function Toolbox(props) {
    const { select, selectedTool } = props;

    return (
        <div>
            <div>
                Digg { selectedTool === DIGGING_TOOL ? '(selected)' : '' }
            </div>
            <div>
                Build { selectedTool === BUILDING_TOOL ? '(selected)' : '' }
            </div>
        </div>
    );
}
