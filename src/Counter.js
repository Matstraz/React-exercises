import { useState } from "react"

export function Counter({initialValue = 0}){

    let [count, setCounter] = useState(initialValue)

    function handleIncrementValue(){
        setCounter(count + 1)
    }

    function handleResetVlaue(){
        setCounter(initialValue)
    }




    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrementValue}>Increment</button>
            <button onClick={handleResetVlaue}>Reset</button>
        </div>
    )

}