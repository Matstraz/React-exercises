import { useState } from "react"
import { Link } from "react-router-dom";
import { Outlet } from "react-router";



export function GithubUserList(){

    const [newUser, setNewUser] = useState([])
    const [usernames, setUsernames] = useState(['Gino', 'Nando', 'Michele'])

    function handleTypeUsername(event){
        setNewUser(event.target.value)
    }

    function handleAddUsername(){
        setUsernames((usernames) => usernames.concat(newUser))
    }

    return(
        <div>
            <ul>{usernames.map((name, index) => <li key={name + index}><Link to={`users/${name}`}>{name}</Link></li>)}</ul>
            <input type="text" value={newUser} onChange={handleTypeUsername}></input>
            <button onClick={handleAddUsername}>Add User</button>
            <Outlet/>
        </div>
    )
}

/* Add a Route to the users path that shows the GihubUserList component from useEffect 04.
 Modify it so that instead of showing the GithubUser component for each username entered, 
 it shows a link to a nested route that shows the ShowGithubUser component. In doing so,
  remove the /users/:username route from the App component, and add a new nested route within
  the /users route. */