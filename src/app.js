import React from "react";
import { Color } from "./Colors";

const items=[
    {id: 1, name: 'Blue'},
    {id: 2, name: 'Orange'},
    {id: 3, name: 'Gray'},
    {id: 4, name: 'Black'},
    {id: 5, name: 'White'},
] 

export class App extends React.Component{
    render(){
        return (
            <div>
                <Color items = {items}/>
            </div>
        )
    }
}