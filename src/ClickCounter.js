import React from "react";

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
                <button onClick={this.incrementValue}>Add 1</button>
            </div>
        )
    }

    
}

ClickCounter.defaultProps = {
    increment: 1
}
