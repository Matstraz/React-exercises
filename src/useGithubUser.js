import useSWR from "swr"

 const fetcher = url => fetch(url).then((response) => response.json())

 export function useGithubUser(username){

    const {data, error, } = useSWR(username !== null ? `https://api.github.com/users/${username}`: null, fetcher)

    return{
        userData: data,
        loading: !data && !error && username !== null,
        genericError: error,
        userError: !data
    }

}

/* Modify the useGithubUser hook so that, if the username is null, no request is made. */