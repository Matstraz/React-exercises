import ReactDOM from 'react-dom';
import { App } from './app';
import { incrementCounter } from './state/CounterState';
import { store } from './state/Store';

const root = document.getElementById('root')
ReactDOM.render(<App/>, root)


store.subscribe(()=>{       // Ritorna qualcosa ad ongi cambiamento dello store (ad ogni evoluzione dello State)
    console.log(store.getState())  // in questo caso mostra il valore dello state ad ogni suo cambiamento
 })

 store.dispatch(incrementCounter(5))
 store.dispatch(incrementCounter(2))


