import React from "react";

export class Counter extends React.Component{

    state = {
        count: this.props.initialValue
    }

    componentDidMount(){
        this._interval = setInterval(() => {
            this.setState({count: this.state.count + this.props.increment})
        }, this.props.timeOut)
    }
    //Is the constructor still required?
    //NO

    componentWillUnmount(){
        if(this._interval){
            clearInterval(this._interval)
        }
    }

    componentDidUpdate(prevProps){
        if(this.state.count > this.props.initialValue*10){
            this.setState({count: prevProps.initialValue})
        }
    }

    render(){
        return (
            <div style={{color: 'red'}}>
        <h1>{this.state.count}</h1>
            
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 10,
    increment: 2,
    timeOut: 250
}
