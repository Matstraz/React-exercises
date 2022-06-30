import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, removerFunction) => {
 
            const mappping = items.map((name, index,) => (
              <li key={name + index}>
                {name}
                <button onClick={removerFunction}>Remove Item</button>
              </li>
            ));
            

            return <ul>{mappping}</ul>;
          }}
          
        ></TodoList>
      </div>
    );
  }
}
