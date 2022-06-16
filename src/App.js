import React from "react";
import { Counter } from "./Counter";
    

    export function App(){

        function onCounterChange(count){
            console.log(count)
        }

        return (
            <div>
               <Counter initialValue={0} onCounterChange={onCounterChange}/>
            </div>
        )
    }


