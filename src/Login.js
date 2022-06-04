import React from "react";

export class Login extends React.Component{

    state = {
        username: "",
        password: "",
        remember: ""
    }

    handleInputValue = (event) =>{
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
        this.setState({[name]: type === "checkbox" ? checked : value})
    }

    render(){
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputValue}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputValue}/>
                <input name="remember" type="checkbox" checked={this.state.check} onChange={this.handleInputValue}/>
            </div>
        )
    }
}