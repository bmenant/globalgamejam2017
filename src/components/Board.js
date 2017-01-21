import React, { Component } from 'react';
import Square from '../containers/Square';

export default class Board extends Component {
//
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}
	/*findNeighbour(board, x, y){
		var result = {};
		if (board[x][y-1]) == null {

		}
	} wip*/
	renderSquare(i) {
		return <Square x={1} y={2} value={2} />;
		//<Square value={this.state.squares[i]}  onClick={() => this.handleClick(i)} />;
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


