import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items) => {
            
             const removing = (event) => {
                const toRemove = event.target.previousSibling.textContent
                items.filter((items) => items !== toRemove)
                return items
            }

            const mappping = items.map((name, index,) => (
              <li key={name + index}>
                {name}
                <button onClick={removing}>Remove Item</button>
              </li>
            ));
            

            return <ul>{mappping}</ul>;
          }}
          
        ></TodoList>
      </div>
    );
  }
}
