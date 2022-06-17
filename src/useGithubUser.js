import { useState, useEffect } from "react"

 export function useGithubUser(username){

    const [hub, setHub] = useState(username)
    const [loading, setLoading] = useState (false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}` )
        .then((response) =>{
            if(response.status !== 200){
                setError(new Error('User not found'))
            }
            return response.json()})
        .then((data)=> setHub(data))
        .catch(error => setError(error))
        .finally(()=> setLoading(false))
    }, [username])
    

    return{
        userData: hub,
        loading: loading,
        error: error
    }

}