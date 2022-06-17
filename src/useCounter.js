import { useState } from "react";

export function useCounter(initialValue){

   const [count, setCount] = useState(initialValue)

   function handleIcrementCounter(){
    setCount((c) => c + 1)
   }

   function handleDecrementCounter(){
    setCount((c) => c - 1)
   }

   function handleResetCounter(){
    setCount((c) => c = initialValue)
   }

   return {
    onIcrement: handleIcrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter,
    count: count
   }
}