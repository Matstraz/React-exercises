import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/users/:username" element={<ShowGithubUser />}/>
                </Routes>
                
           
            </div>
        )
    
}
