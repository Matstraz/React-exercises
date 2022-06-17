import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {userData, loading, error} = useGithubUser(username)

   
    return(
        <div>
            {loading && <h1>Loading</h1>}
            {userData && <h1>Github Data</h1>}
            {userData && <ul><li>ID: {userData.id}</li>
            <li>Name: {userData.name}</li>
            <li>Followers: {userData.followers}</li></ul>}
            {error && <h2>An error has occurred</h2>}
          
           
        </div>
    )
}