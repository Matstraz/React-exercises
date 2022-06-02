import React from "react";
import { CounterButton } from "./CounterButton";

export class ClickCounter extends React.Component{

    state = {
        count: 0
    }

    incrementValue = () =>
    this.setState((state) => ({count: state.count + this.props.increment}))

    render(){
        return (
            <div>
                <h2>{this.state.count}</h2>
                <CounterButton incrementValue={this.incrementValue}/>
            </div>
        )
    }

    
}

ClickCounter.defaultProps = {
    increment: 1
}
