import React from "react";

export class Counter extends React.Component{

    state = {
        count: this.props.initialValue
    }

    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({count: this.state.count + this.props.increment})
        }, this.props.timeOut)
    }

    render(){
        return <h1>{this.state.count}</h1>
    }
}

Counter.defaultProps = {
    initialValue: 10,
    increment: 2,
    timeOut: 700
}

//When calling setState to increment the counter, should the parameter be a function or an object? Why?
//Il parametro dovrebbe essere un oggetto perchè è ciò che rappresenta l'attuale state del componente e che andrà ad aggiornare il precedente.
