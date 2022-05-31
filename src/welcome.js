import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome, <strong>{this.props.name}</strong></p>
                {this.props.age && <Age age={this.props.age}/>}
                <p>{this.props.element}</p>
            </div> 
        ) 
    }
    static defaultProps = {
        name: 'Nino',
    }
}