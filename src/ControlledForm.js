import { useControlledForm } from "./useControlledForm";

export function ControlledForm({initialValue}){

    const {username , password, inputOnChange, passOnChange} = useControlledForm(initialValue)

    return(
        <form>
            <input type="text" name="username" onChange={inputOnChange} value={username}></input>
            <input type="password" name="password"  onChange={passOnChange} value={password}></input>
        </form>
    )
}