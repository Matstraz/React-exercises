import { useState } from "react";

export function useControlledForm(initialValue){

    const [username, setUsername] = useState(initialValue)
    const [password, setPassword] = useState(initialValue)

    function handleInputChange(event){
        setUsername((data) => data = event.target.value)
    }

    function handlePasswordChange(event){
        setPassword((data) => data = event.target.value)
    }

    return{
        username: username,
        password: password,
        inputOnChange: handleInputChange,
        passOnChange: handlePasswordChange
    }

}