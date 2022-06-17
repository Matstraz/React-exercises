/* Extract the logic to fetch a Github user's data from the GithubUser
 component from useEffect 03 into a custom hook called useGithubUser. */

import { useState, useEffect } from "react"

 export function useGithubUser(username){

    const [hub, setHub] = useState(username)

    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}` )
        .then((response) => response.json())
        .then((data)=> setHub(data))
    }, [username])
    
    return{
        userData: hub
    }

 }