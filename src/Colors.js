import React from "react";

export class Color extends React.Component{
    render(){
        return (
            <ul>
                {this.props.colors.map((color, index) => (<li key={color + index}>{color}</li>))}
            </ul>
        )
    }
}