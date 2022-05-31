import React from "react";
import { Hello } from "./hello";
import { Welcome } from "./welcome";

export class App extends React.Component{
    render(){
        const element = <button>Click me!</button>
        return (
            <div>
                <Hello/>
                <Welcome age={66} error="inappropriate" element={element}/>
            </div>
        )
    }
}