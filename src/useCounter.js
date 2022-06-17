import { useCallback, useState } from "react";

export function useCounter(initialValue){

   const [count, setCount] = useState(initialValue)

   const handleIcrementCounter = useCallback(function handleIcrementCounter(){
    setCount((c) => c + 1)
   }, [])

   const handleDecrementCounter = useCallback(function handleDecrementCounter(){
    setCount((c) => c - 1)
   }, [])

   const handleResetCounter = useCallback(function handleResetCounter(){
    setCount((c) => c = initialValue)
   },[initialValue])

   return {
    onIcrement: handleIcrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter,
    count: count
   }
}