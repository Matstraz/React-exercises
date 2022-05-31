import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome, <strong>{this.props.name}</strong></p>
                {this.props.age>18 && this.props.age<65
                ? <Age age={this.props.age}/> 
                : <Age error={this.props.error}/>}
                <p>{this.props.element}</p>
            </div> 
        ) 
    }
    static defaultProps = {
        name: 'Nino',
    }
}