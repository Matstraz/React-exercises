import { useCounter } from "./useCounter"



export function Counter({initialValue = 0}){

    const {onDecrement, onIcrement, onReset, count} = useCounter(initialValue)

  


 /*Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the 
 interval as soon as the component renders, and clears it when the component unmounts.
 */


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={onIcrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )

}