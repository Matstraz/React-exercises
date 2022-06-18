import { useParams} from "react-router";
import { GithubUser } from "./GithubUser";


export function ShowGithubUser(){

    const {username} = useParams()

    return <GithubUser username={username}/>
}


/*Add a new Route to the users/:username path that renders a ShowGithubUser 
component that receives the username as a path parameter and renders 
the GithubUser component from useEffect 03 by passing it the received username.*/