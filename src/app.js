import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./hello";
import { Login } from "./Login";
import { Welcome } from "./welcome";

export class App extends React.Component{
    render(){
        const element = <button>Click me!</button>
        return (
            <div>
                <Hello/>
                <Welcome age={50} element={element}/>
                <Counter />
                <Login />
            </div>
        )
    }
}