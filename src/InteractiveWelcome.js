import React from "react";
import { Welcome } from "./welcome";

export class InteractiveWelcome extends React.Component{

    state = {
        username: ""
    }


    handleInputChange = (event) =>{
        this.setState({username: event.target.value})
    }

    render(){

        let myName = <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
        return(
            <div>
                <Welcome age={50} name={myName} />
            </div>
        )
    }
}