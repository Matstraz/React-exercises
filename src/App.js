import React from "react";
import { Counter } from "./Counter";
import { Login } from "./Login";

export class App extends React.Component{
    render(){
        return (
            <div>
               <Counter />
               <Login />
            </div>
        )
    }
}

