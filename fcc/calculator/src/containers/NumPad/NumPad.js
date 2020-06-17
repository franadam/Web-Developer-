import React, {Component} from 'react';

import './NumPad.css';

class NumPad extends Component {
    state = {
        value: '',
        result: 0
    };

    numpadHandler = (event) => {
        const val = event.target.value;
        this.setState((prevState, props) => {
          return {
          value: prevState.value + val
        };})
    };
    render () {
        const ter = '56.87';
        
        const numStr = ["zero", "one", "two", "three", "four","five","six","seven","eight", "nine"];                
        let num =numStr.map( (n,i) => <button key={n} id={n} style={{width:'100%',height:'100%'}} value={i} onClick={this.numpadHandler} >{i}</button>);
        num.push(<button key='decimal' id="decimal" style={{width:'100%',height:'100%'}} value={'.'} onClick={this.numpadHandler}>.</button>)

        return (
            <div className='NumPad'>
                {num}
                {Number(ter) + 4}
            </div>
        );
    };
};

export default NumPad;