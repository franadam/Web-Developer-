import React, { Component } from "react";
import NumPad from "../NumPad/NumPad";
import OpPad from "../OpPad/OpPad";

import './Calculator.css'
class Calculator extends Component {
    state = {
        value: '',
        result: '',
        mode: 'formula'
    };

    numpadHandler = (event) => {
        const val = event.target.value;
        this.setState((prevState, props) => {
            return {
            value: prevState.value + val
        };})
    };

    calulate = () => {
        this.state.result = new Function('return ' +this.state.value)();
    }

    clearScreen = () => {
        this.setState({
            value: '',
            result: '0'
        });
    }

    modeHandler = () => {
        console.log(this.state)
        let mode = this.state.mode === 'formula' ? 'immediate': 'formula'
        this.setState( {
                mode: mode
            })
    }

    delHandler = () => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value.substring(0, prevState.value.length - 1)
            };
        });
    }

    getResult = () => {
        this.calulate(this.state.value);
        this.setState((prevState, props) => {
            return {
            value: prevState.value + '=' + this.state.result
        };})
    }

    render () {
        
        const numStr = ["zero", "one", "two", "three", "four","five","six","seven","eight", "nine"];                
        const operatorsStr = [ 'plus', 'minus', 'time', 'div', 'parL', 'parR'];
        const ctrsStr = [ 'ace', 'del', 'mode'];
        const myOperator = [ '+', '-', '*', '/', '(', ')'];
        
        let num =numStr.map( (n,i) => <button key={n} id={n} value={i} onClick={this.numpadHandler} >{i}</button>);
        num.push(<button key='decimal' id="decimal" value={'.'} onClick={this.numpadHandler}>.</button>)

        let op = operatorsStr.map((o,i) => <button key={o} id={o} value={myOperator[i]} onClick={this.numpadHandler}>{myOperator[i]}</button>);
        op.push(<button key='equal' id='equal' value='=' onClick={this.calulate}>=</button>);
        let ctr = [];
        ctr.push(<button key='ace' id='ace' value='ace' onClick={this.clearScreen}>{'ace'.toUpperCase()}</button>);
        ctr.push(<button key='del' id='del' value='del' onClick={this.delHandler}>{'del'.toUpperCase()}</button>);
        ctr.push(<button key='mode' id='mode' value='mode' onClick={this.modeHandler}>{'mode'.toUpperCase()}</button>);

        return (
            <div className='Calculator'>
            <div className='display'> 
                <div >{this.state.value} </div>
                <div className='result'>{this.state.result} </div>
            </div>
            {ctr}
            {op}
            {num}
            </div>
        );
    };
};

export default Calculator;