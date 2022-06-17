import { useEffect, useState } from "react"

export function GithubUser({username="matstraz"}){

    const [hub, setHub] = useState(username)

    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}` )
        .then((response) => response.json())
        .then((data)=> setHub(data))
    }, [username])
    

    return(
        <div>
            <h1>Github Data</h1>
            <h3>ID: {hub.id}</h3>
            <h3>Name: {hub.name}</h3>
            <h3>Followers: {hub.followers}</h3>
        </div>
    )
}

/* Create a GithubUser component that fetches the data of the username passed
 as a prop, and renders some of the data within a div tag. The API to query 
 is https://api.github.com/users/${username}. */