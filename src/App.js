import React from "react";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
    

    export function App(){


        return (
            <div>
               <GithubUser username={'Matstraz'}/>
               <GithubUserList/>
            </div>
        )
    }


