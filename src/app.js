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
                        <Route path="users/" element={<ShowGithubUser />}/>
                    </Route>
                    <Route path="*" element={<h2>Route not Found, please go back <Link to="/">Home</Link></h2>}/>
                </Routes>
                
           
            </div>
        )
    
}


/* Add a Route to the users path that shows the GihubUserList component from useEffect 04.
 Modify it so that instead of showing the GithubUser component for each username entered, 
 it shows a link to a nested route that shows the ShowGithubUser component. In doing so,
  remove the /users/:username route from the App component, and add a new nested route within
  the /users route. */