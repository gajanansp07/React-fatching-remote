import React from "react";
import { Component } from "react";
import reactDom from "react-dom";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
        };
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i]='X';
        this.setState({squares:squares});
    }
    renderSquare(i){
        return (
        <square 
        value={this.state.squares[i]} 
        onClick={()=>this.handleClick(i)}
        />);
    };
    render(){
        const status = 'Next Player X'

        return(
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className='board-row'>
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
            </div>
            <div className='board-row'>
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
            </div>
        </div>
        );
    }

}