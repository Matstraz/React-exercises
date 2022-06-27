import ReactDOM from 'react-dom';
import { App } from './app';
import { incrementCounter } from './state/CounterState';
import { store } from './state/Store';
import { todoList } from './state/TodoState';

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)


store.subscribe(()=>{       // Ritorna qualcosa ad ongi cambiamento dello store (ad ogni evoluzione dello State)
    console.log(store.getState())  // in questo caso mostra il valore dello state ad ogni suo cambiamento
 })

 store.dispatch(todoList.actions.add({id: 1, title: 'milk', completed: true}))
 store.dispatch(incrementCounter(5))
 store.dispatch(todoList.actions.add({id: 2, title: 'eggs', completed: false}))
 store.dispatch(incrementCounter(2))
 


