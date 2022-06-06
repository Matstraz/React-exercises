import React from "react";

export class Color extends React.Component{
    render(){
        return (
            <ul>
                {this.props.items.map((color, index) => (<li key={color.id}>{color.name}</li>))}
            </ul>
        )
    }
}