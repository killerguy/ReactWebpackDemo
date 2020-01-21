import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        })
        console.log('handleAddOne ' + this.state.count);
    }

    handleMinusOne() {
        this.state.count = this.state.count - 1;
        this.setState(this.state);
        console.log('handleMinusOne ' + this.state.count);
    }

    handleReset() {
        this.setState((preState) => {
            return {
                count: 0
            }
        })
        console.log('handleReset ' + this.state.count);
    }

    componentDidUpdate() {
        console.log("Component Update")
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
                <br/>
               <h2> Counter : {this.state.count} </h2>
            </div>
        );
    }
}

 

