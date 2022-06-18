import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./welcome";


export function App(){
        return (
            <div>
                <h2>Use links to navigate within the App</h2>
                <h3><Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="userslist">Github Users List</Link></h3>
                <hr/>
                <Routes>
                    <Route path="/" element={<Welcome name={'Nino'}/>}/>
                    <Route path="counter" element={<Counter />}/>
                    <Route path="userslist" element={<GithubUserList />}>
                        <Route index element={<p>Please, select a name</p>}/>
                        <Route path="users/" element={<ShowGithubUser />}/>
                    </Route>
                    <Route path="*" element={<h2>Route not Found, please go back <Link to="/">Home</Link></h2>}/>
                </Routes>
                
           
            </div>
        )
    
}


/* Add an index route to the GithubUserList route that shows the "Add a user and select it" message. */