import React, { Component } from 'react';
import Square from '../containers/Square';

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}
	render() {
         var board = this.props.boardValues.map((rowArray, indexRow) => {
        	const squares = rowArray.map((col, indexCol)=> {
        		return <Square x= {indexRow} y = {indexCol} value={col} />
        	});
        	return <div> {squares} </div>;
        })
        return <div  id="board">{board}</div>;
    }
}


