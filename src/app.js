import React from "react";
import { Color } from "./Colors";


export class App extends React.Component{
    render(){
        return (
            <div>
                <Color colors={['Blue', 'Orange', 'Gray', 'Black', 'White']} />
            </div>
        )
    }
}