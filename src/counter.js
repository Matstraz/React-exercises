import { useEffect, useState } from "react"

export function Counter({initialValue = 0}){

    const [count, setCounter] = useState(initialValue)

    function handleIncrementValue(){
        setCounter(count + 1)
    }

    function handleResetVlaue(){
        setCounter(initialValue)
    }

    useEffect(()=> {
        const increment = setInterval(()=>{
            setCounter(count + 1)
        }, 2000)
    
    return()=>clearInterval(increment)}
        
        , [count])



 /*Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the 
 interval as soon as the component renders, and clears it when the component unmounts.
 */


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrementValue}>Increment</button>
            <button onClick={handleResetVlaue}>Reset</button>
        </div>
    )

}