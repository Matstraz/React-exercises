import React from "react";

export class ClickTracker extends React.Component{

    state = {
        lastClick: []
    }

    wichFirst = (event) =>{
         this.setState({lastClick: []})
         this.setState((state) => ({lastClick: state.lastClick.concat(event.target.innerHTML)}))
    }

    render(){
        return (
            <div>
                <button onClick={this.wichFirst}>Button 1</button>
                <button onClick={this.wichFirst}>Button 2</button>
                <button onClick={this.wichFirst}>Button 3</button>
                <h1>Last pressed button: {this.state.lastClick}</h1>
            </div>
        )
    }
}