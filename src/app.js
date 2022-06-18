import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <h2>Use links to navigate within the App</h2>
                <h3><Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users/">Github Users</Link></h3>
                <hr/>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/users/:username" element={<ShowGithubUser />}/>
                </Routes>
                
           
            </div>
        )
    
}
