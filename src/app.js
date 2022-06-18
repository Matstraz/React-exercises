import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                    <Route path="/counter" element={<Counter />}/>
                </Routes>
                
           
            </div>
        )
    
}

/*Add a new Route to the /counter path that renders the Counter component from useState 01. */