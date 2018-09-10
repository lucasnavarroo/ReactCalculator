import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Display extends Component {

    constructor() {
        super();

        this.state = {operationsDisplay: '', resultDisplay: ''};
        this.isNumber = this.isNumber.bind(this);
    }

    isNumber(element) {
        if(element !== '+' && element !== '-' && element !== '/' && element !== '*' && element !== '.') return true; 
        else return false;     
    }

    componentDidMount() {
        PubSub.subscribe('operation-click', function(event, value) {
            var operations = this.state.operationsDisplay;              
                var newOperation = operations;
                newOperation += value;
                this.setState({operationsDisplay: newOperation});     
        }.bind(this));

        PubSub.subscribe('clear-click', function(event) {
            this.setState({operationsDisplay: '', resultDisplay: ''});
        }.bind(this)); 

        PubSub.subscribe('result-click', function(event) {
            var opDisplay = this.state.operationsDisplay;
            var resDisplay = this.state.resultDisplay;

             if(resDisplay !== '') {
                if(opDisplay[0] === '+'|| opDisplay[0] === '-'|| opDisplay[0] === '*'|| opDisplay[0] === '/') {
                    var result = eval(resDisplay + opDisplay);
                    this.setState({operationsDisplay: '', resultDisplay: result});    
                } else {
                    var result = eval(opDisplay);
                    this.setState({operationsDisplay: '', resultDisplay: result});   
                }
             }  

            else if(opDisplay !== '') {
                var result = eval(opDisplay);
                this.setState({operationsDisplay: '', resultDisplay: result});    
            }

        }.bind(this));
    }

    render() {
        return(
            <div>
                <div className="operationsDisplay" id="display">{this.state.operationsDisplay}</div>
                <div className="resultDisplay">{this.state.resultDisplay}</div>
            </div>
        );
    }
}

