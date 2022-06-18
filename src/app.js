import React from "react";
import { CarDetails } from "./CarDetails";

const initialData = {
    model: 'Citroen C3',
    year: 2020,
    color: 'White'
}


export class App extends React.Component{
    render(){
        return (
            <div>
               <CarDetails initialData={initialData}/>
            </div>
        )
    }
}