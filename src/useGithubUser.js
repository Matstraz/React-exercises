import useSWR from "swr"

 const fetcher = url => fetch(url).then((response) => response.json())

 export function useGithubUser(username){

    const {data, error, mutate} = useSWR(username !== null ? `https://api.github.com/users/${username}`: null, fetcher)

    function handleRefetchData(){
        mutate()
    }

    return{
        userData: data,
        loading: !data && !error && username !== null,
        genericError: error,
        userError: !data,
        onRefresh: handleRefetchData
    }

}

/*Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked. */