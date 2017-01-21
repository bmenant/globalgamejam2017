import React, { Component } from 'react';
import Square from '../containers/Square';

export default class Board extends Component {
	render() {
	    const { boardValues, isGameOver } = this.props;

         var board = boardValues.map((rowArray, indexRow) => {
        	const squares = rowArray.map((col, indexCol)=> {
        		return <Square x= {indexRow} y = {indexCol} value={col} />
        	});
        	return <div> {squares} </div>;
        })
        return (
        	<section>
                <div>{board}</div>
				{ isGameOver && <div>GAME OVER</div> }
			</section>
		);
    }
}


