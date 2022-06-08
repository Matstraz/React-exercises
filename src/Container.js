import React from "react"

export class Container extends React.Component{
    render(){
        return (
            <div className="bg-white border-2 border-red-500">
               {this.props.children}
            </div>
        )
    }
}