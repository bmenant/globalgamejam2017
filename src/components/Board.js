import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
//
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

	renderSquare(i) {
		return <Square x={4} y={6} value="2" />;
		//<Square value={this.state.squares[i]}  onClick={() => this.handleClick(i)} />;
	}
	render() {
		/*const winner = calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}*/
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
			);
	}
}


