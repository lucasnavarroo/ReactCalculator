import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Buttons extends Component {

    operationsClick(value) {
        PubSub.publish('operation-click', value);
    }

    clearClick() {
        PubSub.publish('clear-click');
    }

    calculate() {
        PubSub.publish('result-click');
    }

    render() {
        return(
            <div>
                <div>
                    <button id="seven" onClick={this.operationsClick.bind(this, '7')}>7</button>
                    <button id="eight" onClick={this.operationsClick.bind(this, '8')}>8</button>
                    <button id="nine" onClick={this.operationsClick.bind(this, '9')}>9</button>
                </div>
                <div>
                    <button id="four" onClick={this.operationsClick.bind(this, '4')}>4</button>
                    <button id="five" onClick={this.operationsClick.bind(this, '5')}>5</button>
                    <button id="six" onClick={this.operationsClick.bind(this, '6')}>6</button>
                </div>
                <div>
                    <button id="one" onClick={this.operationsClick.bind(this, '1')}>1</button>
                    <button id="two" onClick={this.operationsClick.bind(this, '2')}>2</button>
                    <button id="three" onClick={this.operationsClick.bind(this, '3')}>3</button>
                </div>
                <div>
                    <button id="decimal" onClick={this.operationsClick.bind(this, '.')}>.</button>
                    <button id="zero" onClick={this.operationsClick.bind(this, '0')}>0</button>
                    <button id="equals" onClick={this.calculate.bind(this, '0')}>=</button>
                </div>
                <div>         
                    <button id="clear" onClick={this.clearClick.bind(this)}>AC</button>
                    <button id="divide" onClick={this.operationsClick.bind(this, '/')}>/</button>
                    <button id="multiply" onClick={this.operationsClick.bind(this, '*')}>X</button>
                    <button id="subtract" onClick={this.operationsClick.bind(this, '-')}>-</button>
                    <button id="add" onClick={this.operationsClick.bind(this, '+')}>+</button>
                </div>
            </div>
        );
    }
}