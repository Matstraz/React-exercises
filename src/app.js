import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <h2>Use links to navigate within the App</h2>
                <h3><Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/">Github Users</Link></h3>
                <hr/>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                    <Route path="counter" element={<Counter />}/>
                    <Route path="users/:username" element={<ShowGithubUser />}/>
                    <Route path="users/" element={<ShowGithubUser />}/>          {/* Default username value */}
                    <Route path="*" element={<h2>Route not Found, please go back <Link to="/">Home</Link></h2>}/>
                </Routes>
                
           
            </div>
        )
    
}

/* Add a Not Found route that renders when a user navigates to a path that does not exist. */
