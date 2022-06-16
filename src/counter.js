import { useEffect, useState } from "react"

export function Counter(props){

    let [count, setCounter] = useState(props.initialValue)

    function handleIncrementValue(){
        setCounter(count + 1)
    }

    function handleResetVlaue(){
        setCounter(props.initialValue)
    }

    useEffect(()=> {
        props.onCounterChange(count)
    }, [count, props])


 /*    Add a side effect to the Counter component from useState 01 that calls a onCounterChange
     function with the current value of the counter every time value of the counter changes.
      The function should be received as a prop.
 */


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrementValue}>Increment</button>
            <button onClick={handleResetVlaue}>Reset</button>
        </div>
    )

}