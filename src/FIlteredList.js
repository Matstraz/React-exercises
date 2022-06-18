/* Create a FilteredList component that receives a list of objects each containing a 
name, an id and a age prop. The FilteredList component should render only the items
 of the list whose age is greater than 18, and the filtering should only happen when 
 the list changes. Use useMemo to memoize the filtered list. */

 import { useMemo } from "react";

 export function FilteredList() {
   const object1 = [
     {
       id: 1,
       name: "Nino",
       age: 30,
     },
     {
       id: 2,
       name: "Mario",
       age: 20,
     },
     {
       id: 3,
       name: "Michela",
       age: 10,
     },
     {
       id: 4,
       name: "Fabiola",
       age: 17,
     },
     {
       id: 5,
       name: "Agata",
       age: 40,
     },
     {
       id: 6,
       name: "Giovanni",
       age: 45,
     },
     {
       id: 7,
       name: "Piero",
       age: 60,
     },
   ];
 
   function filtering(obj){
    return obj.map((item, index) => item.age > 18 && <li key={item + index}>{item.name}</li>)
   }

   const result = useMemo(()=> filtering(object1), [object1])

   return (
     <ul>
       {result}
     </ul>
   );
 }
 
 