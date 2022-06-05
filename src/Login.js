import React from "react";

export class Login extends React.Component{

    state = {
        username: "",
        password: "",
        remember: false,
        disabled: "disabled"
    }

    handleInputValue = (event) =>{
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
        const username = this.state.username
        const password = this.state.password

        this.setState({[name]: type === "checkbox" ? checked : value})

        this.setState({
            disabled: username === ""
            ? "disabled" 
            : password === ""
            ? "disabled"
            : ""
        })
    }

    onLogin = () =>{
        console.log(this.state) 
    }

    handleInitialState = () =>{
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }

    render(){
    
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputValue}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputValue}/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputValue}/>
                <button disabled={this.state.disabled} onClick={this.onLogin}>Login</button>
                <button onClick={this.handleInitialState}>Reset</button>
            </div>
        )
    }
}