import React from "react";
import { Hello } from "./hello";
import { Welcome } from "./welcome";

export class App extends React.Component{
    render(){
        const element = <button>Click me!</button>
        return (
            <div>
                <Hello/>
                <Welcome age={75} error="inappropriate" name="Jhon" element={element}/>
            </div>
        )
    }
}