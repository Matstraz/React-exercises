import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                </Routes>
                
           
            </div>
        )
    
}

/* Create an App component that wraps a Routes component and add a single Route to the / path that 
renders the Welcome component from Function Components 
01, passing it a name prop. Render the App component within a BrowserRouter component */