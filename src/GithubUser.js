import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {userData} = useGithubUser(username)

   
    return(
        <div>
            <h1>Github Data</h1>
            <h3>ID: {userData.id}</h3>
            <h3>Name: {userData.name}</h3>
            <h3>Followers: {userData.followers}</h3>
        </div>
    )
}