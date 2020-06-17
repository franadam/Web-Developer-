import React, { Component } from "react";

class OpPad extends Component {
    state = {
        done: false
    }

    operatorHandler = (event) => {
        const val = event.target.value;
        switch (val) {
            case '+':
                console.log('add')
                
                break;
        
            default:
                break;
        }
    };

    render () {
        return (
            <div>
            <button key='add' id="add" style={{width:'100%',height:'100%'}} value={'+'} onClick={this.operatorHandler}>+</button>
            </div>
        );
    };
};

export default OpPad;