import React from "react"

export class Container extends React.Component{
    render(){
        return (
            <div className="bg-white border-2 border-red-500">
                <h1 className="text-3xl text-center m-5">{this.props.title}</h1>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}