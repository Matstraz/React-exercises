import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
                {this.props.elemento}
            </div> 
        ) 
    }
    // Can you set a default value for the name prop?
    static defaultProps = {
        name: 'Nino',
    }
}

//What happens if no name prop is passed to the Welcome component?
//La proprietà non verrà renderizzata, come se {this.props.name} non fosse stato scritto.
