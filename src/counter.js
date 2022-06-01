import React from "react";
import { CounterDisplay } from "./counterdisplay";

export class Counter extends React.Component{

    state = {
        count: this.props.initialValue
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({count: this.state.count + this.props.increment})
        }, this.props.timeOut)
    }
    //Is the constructor still required?
    //NO

    render(){
        return (
            <div>
                {this.state.count < this.props.initialValue * 10
                ?  <CounterDisplay count={this.state.count}/>
                :  <CounterDisplay count={this.props.initialValue} />
            } 
            
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 10,
    increment: 2,
    timeOut: 250
}


//Reset the counter to the initial value received as a prop when the value is greater than ten times that initial value.

//When calling setState to increment the counter, should the parameter be a function or an object? Why?
//Il parametro dovrebbe essere un oggetto perchè è ciò che rappresenta l'attuale state del componente e che andrà ad aggiornare il precedente.
