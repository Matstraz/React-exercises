import React from "react";

export class CounterButton extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.incrementValue}>Add 1</button>
            </div>
        )
    }

    
}

