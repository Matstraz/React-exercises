import React from "react"

export class Age extends React.Component{
    render(){
        return (
            <div>{
                this.props.age> 18
                    ? <p>Your age {/* (or your name) */} is {this.props.age}{this.props.error}</p>
                    : <p>You are very young!</p>
            }
            </div>
        )
    }
}