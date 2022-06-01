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
