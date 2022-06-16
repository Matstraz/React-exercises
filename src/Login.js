import { useState } from "react"

export function Login(){


  /*   let [username, setUsername] = useState('')  //modifica singolarmente

    function handleInputChange(event){
        setUsername(username = event.target.value)
    } */

    
     const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
        disabled: "disabled"
    }) 

    function handleInputChange(event){
       const {name, type, value, checked} = event.target

       setData((data) =>{
        return {
            ...data,
            [name]: type === 'checkbox' ? checked : value
        }
       })

       setData({disabled : data.username === ""
       ? 'disabled' 
       : data.password === "" 
       ? 'disabled' 
       : ''})
    }

  console.log(data)




    return(
        <form>
            <input name="username" type="text" value={data.username} onChange={handleInputChange}></input>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}></input>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}></input>
            <button disabled={data.disabled}>Login</button>
        </form>
    )
}