import React from "react"

export class Age extends React.Component{
    render(){
        return (
            <div>
                <p>Your age (or your name) is {this.props.age}{this.props.error}</p>
            </div>
        )
    }
}