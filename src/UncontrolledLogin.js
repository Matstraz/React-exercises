import React from "react";
import { createRef } from "react";

export class UncontrolledLogin extends React.Component{
    
    _formRef = createRef()

    handleFormSubmit = (event) =>{
      event.preventDefault();
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({username, password, remember})
    }

    handleAutofillForm = () => {
        this._formRef.current.elements.username.value = "Nino"
        this._formRef.current.elements.password.value = "01234"
        this._formRef.current.elements.remember.checked = true
    }

    render(){
        return (
            <div>
                <h3>Uncontrolled Login</h3>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" type="text" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox" />

                    <button>Submit</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleAutofillForm}>Autofill</button>
                </form>
            </div>
        )
    }
}